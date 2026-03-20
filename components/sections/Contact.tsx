'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    setup: '',
    challenges: '',
    urgency: '',
    contactMethods: [] as string[],
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Form Submitted Successfully!',
          description: "Our engineering team will review your request and get back to you shortly.",
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          setup: '',
          challenges: '',
          urgency: '',
          contactMethods: [],
          additionalInfo: '',
        });
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      toast({
        title: 'Error Submitting Request',
        description: "There was a problem sending your request. Please try again or email us directly.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+251 911 407 439 / 095 519 0019',
      href: 'tel:+251911407439',
    },
    {
      icon: Mail,
      label: 'Email US',
      values: [
        'info@itsectechnology.com',
        'contact@itsectechnology.com',
        'support@itsectechnology.com',
        'sales@itsectechnology.com'
      ]
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Kirkos Church, Addis Ababa, Ethiopia',
      href: 'https://maps.google.com/?q=Kirkos+Church+Addis+Ababa+Ethiopia',
    },
  ];

  const handleCheckboxChange = (method: string, checked: boolean) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, contactMethods: [...prev.contactMethods, method] };
      } else {
        return { ...prev, contactMethods: prev.contactMethods.filter(m => m !== method) };
      }
    });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0 z-0 bg-blue-900/5">
        <img
          src="/images/contact-us-map.png"
          alt="Global Network Background"
          className="w-full h-full object-cover object-center opacity-85 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/80 to-blue-50/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            ITSEC Technology <br/>
            <span className="text-blue-600">Service Request</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Please fill out the form below to detail your IT environment and specific consulting needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-slate-200">
              <CardContent className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Basic Info */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company / Organization Name</label>
                      <Input
                        id="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+251 911..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-50"
                      />
                    </div>
                  </div>

                  {/* Dropdown for Service */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Select Service Interested In <span className="text-red-500">*</span></label>
                    <Select required value={formData.service} onValueChange={(val) => setFormData({...formData, service: val})}>
                      <SelectTrigger className="bg-slate-50">
                        <SelectValue placeholder="Choose a service category..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Question">General Question</SelectItem>
                        <SelectItem value="Service Request">Service Request</SelectItem>
                        <SelectItem value="Technical Support">Technical Support</SelectItem>
                        <SelectItem value="Sales / Pricing">Sales / Pricing</SelectItem>
                        <SelectItem value="Cybersecurity Solutions">Cybersecurity Solutions</SelectItem>
                        <SelectItem value="Network Infrastructure">Network Infrastructure</SelectItem>
                        <SelectItem value="IT Consulting Services">IT Consulting Services</SelectItem>
                        <SelectItem value="Cloud Services & Migration">Cloud Services & Migration</SelectItem>
                        <SelectItem value="Web Development & Hosting">Web Development & Hosting</SelectItem>
                        <SelectItem value="IT Support & Maintenance">IT Support & Maintenance</SelectItem>
                        <SelectItem value="Data Backup & Disaster Recovery">Data Backup & Disaster Recovery</SelectItem>
                        <SelectItem value="Digital Transformation / Automation">Digital Transformation / Automation</SelectItem>
                        <SelectItem value="Security Audit & Compliance">Security Audit & Compliance</SelectItem>
                        <SelectItem value="Other">Other (Please Specify Below)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Paragraph Texts */}
                  <div className="space-y-2">
                    <label htmlFor="setup" className="text-sm font-semibold text-slate-700">Current IT / Cybersecurity Setup</label>
                    <p className="text-xs text-slate-500 mb-2">Describe your current IT systems, network, servers, and cybersecurity tools.</p>
                    <Textarea
                      id="setup"
                      rows={3}
                      value={formData.setup}
                      onChange={(e) => setFormData({ ...formData, setup: e.target.value })}
                      className="bg-slate-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="challenges" className="text-sm font-semibold text-slate-700">Problems / Challenges</label>
                    <p className="text-xs text-slate-500 mb-2">Specify any issues, security threats, downtime, or infrastructure challenges.</p>
                    <Textarea
                      id="challenges"
                      rows={3}
                      value={formData.challenges}
                      onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                      className="bg-slate-50"
                    />
                  </div>

                  {/* Priority Radio Buttons */}
                  <div className="space-y-3 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="text-sm font-semibold text-slate-700 block mb-2">Urgency / Priority Level <span className="text-red-500">*</span></label>
                    <RadioGroup 
                      required 
                      value={formData.urgency} 
                      onValueChange={(val) => setFormData({...formData, urgency: val})}
                      className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Low" id="r1" />
                        <label htmlFor="r1" className="text-sm text-slate-600 font-medium cursor-pointer">Low</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Medium" id="r2" />
                        <label htmlFor="r2" className="text-sm text-slate-600 font-medium cursor-pointer">Medium</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="High" id="r3" />
                        <label htmlFor="r3" className="text-sm text-slate-600 font-medium cursor-pointer">High</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Critical" id="r4" />
                        <label htmlFor="r4" className="text-sm text-red-600 font-bold cursor-pointer drop-shadow-sm">Critical</label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Contact Method Checkboxes */}
                  <div className="space-y-3 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                    <label className="text-sm font-semibold text-slate-700 block mb-2">Preferred Contact Method</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="c-email" 
                          checked={formData.contactMethods.includes('Email')}
                          onCheckedChange={(checked) => handleCheckboxChange('Email', checked as boolean)}
                        />
                        <label htmlFor="c-email" className="text-sm text-slate-600 font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="c-phone" 
                          checked={formData.contactMethods.includes('Phone')}
                          onCheckedChange={(checked) => handleCheckboxChange('Phone', checked as boolean)}
                        />
                        <label htmlFor="c-phone" className="text-sm text-slate-600 font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="c-video" 
                          checked={formData.contactMethods.includes('Video Call / Online Meeting')}
                          onCheckedChange={(checked) => handleCheckboxChange('Video Call / Online Meeting', checked as boolean)}
                        />
                        <label htmlFor="c-video" className="text-sm text-slate-600 font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Video Call / Online Meeting</label>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <label htmlFor="additionalInfo" className="text-sm font-semibold text-slate-700">Additional Information / Requests</label>
                    <Textarea
                      id="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="bg-slate-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-bold shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Submitting Request...'
                    ) : (
                      <>
                        Submit Service Request
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      {info.values ? (
                        <div className="flex flex-col space-y-2 pt-1">
                          {info.values.map(email => (
                            <a
                              key={email}
                              href={`mailto:${email}`}
                              className="font-semibold text-sm sm:text-base hover:text-primary transition-colors"
                            >
                              {email}
                            </a>
                          ))}
                        </div>
                      ) : info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold hover:text-primary transition-colors block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
          <iframe
            title="ITSEC Technology Office Location - Kirkos Church, Addis Ababa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9329!2d38.7537!3d9.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sKirkos%2C+Addis+Ababa%2C+Ethiopia!5e0!3m2!1sen!2set!4v1!"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
