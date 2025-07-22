import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_q23la55',     // 🔁 Replace with your EmailJS service ID
        'template_jdpnxii',    // 🔁 Replace with your EmailJS template ID
        formRef.current,
        'mJsoQFyriX1UkCw-D'      // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: 'Message sent!',
            description: "Thank you for reaching out. I'll get back to you soon!"
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast({
            title: 'Something went wrong!',
            description: error.text || 'Please try again later.'
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-dark-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-dark-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-dark-muted dark:to-gray-900 border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-slate-300 dark:border-gray-600 dark:bg-dark-muted dark:text-white focus:border-violet-600 focus:ring-violet-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-slate-300 dark:border-gray-600 dark:bg-dark-muted dark:text-white focus:border-violet-600 focus:ring-violet-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="border-slate-300 dark:border-gray-600 dark:bg-dark-muted dark:text-white focus:border-violet-600 focus:ring-violet-600"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-600 dark:text-dark-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-4 transition-transform duration-300 group-hover:animate-bounce">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-dark-muted-foreground">kavithaannakkili@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-4 transition-transform duration-300 group-hover:animate-bounce">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-dark-muted-foreground">Available for remote work</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white mr-4 transition-transform duration-300 group-hover:animate-bounce">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Response Time</h4>
                  <p className="text-slate-600 dark:text-dark-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Kavitha04-04Sonachalam" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-dark-muted hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                    <Github className="h-6 w-6 text-slate-600 dark:text-white group-hover:text-white transition-colors" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/kavitha-sonachalam-614193253/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-dark-muted hover:bg-gradient-to-r hover:from-violet-600 hover:to-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-slate-600 dark:text-white group-hover:text-white transition-colors" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;




