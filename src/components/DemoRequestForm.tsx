import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const demoRequestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Company name must be at least 2 characters" })
    .max(100, { message: "Company name must be less than 100 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Phone number must be at least 7 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[+\d\s()-]+$/, { message: "Invalid phone number format" }),
  message: z
    .string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional(),
});

type DemoRequestFormData = z.infer<typeof demoRequestSchema>;

interface DemoRequestFormProps {
  trigger?: React.ReactNode;
}

const DemoRequestForm = ({ trigger }: DemoRequestFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const form = useForm<DemoRequestFormData>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: DemoRequestFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast({
        title: t('demoRequest.success'),
        description: t('demoRequest.success'),
      });
      
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: t('demoRequest.error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" variant="outline" className="text-base px-8">
            <Calendar className="mr-2 w-5 h-5" />
            {t('hero.requestDemo')}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t('demoRequest.title')}</DialogTitle>
          <DialogDescription>
            {t('demoRequest.description')}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('demoRequest.form.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('demoRequest.form.namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('demoRequest.form.email')}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('demoRequest.form.emailPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('demoRequest.form.company')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('demoRequest.form.companyPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('demoRequest.form.phone')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('demoRequest.form.phonePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('demoRequest.form.message')}</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('demoRequest.form.messagePlaceholder')}
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t('demoRequest.form.submitting') : t('demoRequest.form.submit')}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestForm;
