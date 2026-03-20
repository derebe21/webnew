'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldAlert, BadgeCheck, BarChart3, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Consolidated form state
  const [formData, setFormData] = useState({
    // Shared
    name: '',
    email: '',
    phone: '',
    urgency: 'Medium',
    
    // Logic specific
    department: 'General Inquiry',
    company: '',
    service: '',
    product: '',
    issueDescription: '',
    projectType: '',
    projectDescription: '',
    interestedServices: '',
    quoteDetails: '',
    
    // General section specifics
    setup: '',
    challenges: '',
    contactMethods: [] as string[],
    additionalInfo: '',
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (method: string, checked: boolean) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, contactMethods: [...prev.contactMethods, method] };
      } else {
        return { ...prev, contactMethods: prev.contactMethods.filter(m => m !== method) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, tab: activeTab }),
      });

      if (response.ok) {
        toast({
          title: 'Request Sent Successfully!',
          description: `Thank you, ${formData.name}. Our ${activeTab} team has received your request and an auto-reply has been sent to your email.`,
        });
        // Reset form
        setFormData({
          name: '', email: '', phone: '', urgency: 'Medium',
          department: activeTab, company: '', service: '', product: '', issueDescription: '',
          projectType: '', projectDescription: '', interestedServices: '', quoteDetails: '',
          setup: '', challenges: '', contactMethods: [], additionalInfo: '',
        });
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      toast({
        title: 'Submission Error',
        description: 'We encountered a problem. Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+251 911 407 439 / 095 519 0019', href: 'tel:+251911407439' },
    { icon: Mail, label: 'Email', values: ['info@itsectechnology.com', 'contact@itsectechnology.com', 'support@itsectechnology.com', 'sales@itsectechnology.com'] },
    { icon: MapPin, label: 'Address', value: 'Kirkos Church, Addis Ababa, Ethiopia', href: 'https://maps.google.com/?q=Kirkos+Church+Addis+Ababa+Ethiopia' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-blue-950/5">
        <img src="/images/contact-us-map.png" alt="Map" className="w-full h-full object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-white/80 to-blue-50/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            ITSEC <span className="text-blue-600">Portal</span>
          </h2>
          <p className="mt-4 text-xl text-slate-600 font-medium">Select a department to get the specialized support you need.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-slate-200/50 mb-8 rounded-2xl">
                <TabsTrigger value="general" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-lg"><MessageSquare className="w-4 h-4 mr-2 hidden sm:inline" /> General</TabsTrigger>
                <TabsTrigger value="support" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-red-700 data-[state=active]:shadow-lg"><ShieldAlert className="w-4 h-4 mr-2 hidden sm:inline" /> Support</TabsTrigger>
                <TabsTrigger value="projects" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-lg"><BadgeCheck className="w-4 h-4 mr-2 hidden sm:inline" /> Projects</TabsTrigger>
                <TabsTrigger value="sales" className="rounded-xl py-3 data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-lg"><BarChart3 className="w-4 h-4 mr-2 hidden sm:inline" /> Sales</TabsTrigger>
              </TabsList>

              <Card className="shadow-[0_20px_50px_rgba(0,0,0,0.08)] border-slate-200 overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit}>
                    {/* Shared Top Fields */}
                    <div className="p-8 pb-4 bg-slate-50/50 border-b border-slate-100 grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Full Name *</label>
                        <Input placeholder="Your Name" value={formData.name} onChange={(e) => updateField('name', e.target.value)} required className="h-12 bg-white border-slate-200 shadow-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address *</label>
                        <Input type="email" placeholder="email@address.com" value={formData.email} onChange={(e) => updateField('email', e.target.value)} required className="h-12 bg-white border-slate-200 shadow-sm" />
                      </div>
                    </div>

                    <div className="p-8 pt-6 space-y-8">
                      {/* Department Context Information */}
                      <div className="flex items-center space-x-3 text-sm font-bold text-blue-600 uppercase tracking-widest">
                        <div className="w-8 h-px bg-blue-200" />
                        <span>Department: {activeTab === 'general' ? 'General Inquiry' : activeTab === 'support' ? 'Technical Support' : activeTab === 'projects' ? 'Engineering & Projects' : 'Sales & Pricing'}</span>
                      </div>

                      {/* --- 1. GENERAL TAB --- */}
                      <TabsContent value="general" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                            <Input placeholder="+251..." value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Select Service Interested In *</label>
                            <Select required onValueChange={(v) => updateField('service', v)}>
                              <SelectTrigger className="bg-white"><SelectValue placeholder="Choose a service..." /></SelectTrigger>
                              <SelectContent>
                                {['Cybersecurity Solutions', 'Network Infrastructure', 'Fiber Optic Installation', 'IT Consulting Services', 'Cloud Services & Migration', 'Web Development & Hosting', 'IT Support & Maintenance', 'Data Backup & Disaster Recovery', 'Digital Transformation / Automation', 'Security Audit & Compliance', 'Other'].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Current IT / Cybersecurity Setup</label>
                          <Textarea placeholder="Describe your systems..." rows={3} value={formData.setup} onChange={(e) => updateField('setup', e.target.value)} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Problems / Challenges</label>
                          <Textarea placeholder="What issues are you facing?" rows={2} value={formData.challenges} onChange={(e) => updateField('challenges', e.target.value)} />
                        </div>
                      </TabsContent>

                      {/* --- 2. SUPPORT TAB --- */}
                      <TabsContent value="support" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                            <Input placeholder="+251..." value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Product / Service Needing Support</label>
                            <Select onValueChange={(v) => updateField('product', v)}>
                              <SelectTrigger className="bg-white"><SelectValue placeholder="Choose product..." /></SelectTrigger>
                              <SelectContent>
                                {['Network Infrastructure', 'Fiber Network / Fiber Optic System', 'Cybersecurity System', 'Web Hosting / Web Development', 'Cloud Service', 'Other'].map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Description of Issue (Required) *</label>
                          <Textarea placeholder="Tell us exactly what is wrong..." rows={4} value={formData.issueDescription} onChange={(e) => updateField('issueDescription', e.target.value)} required />
                        </div>
                      </TabsContent>

                      {/* --- 3. PROJECTS TAB --- */}
                      <TabsContent value="projects" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Company / Organization Name</label>
                            <Input placeholder="Your Company" value={formData.company} onChange={(e) => updateField('company', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Project Type / Service Needed</label>
                            <Select onValueChange={(v) => updateField('projectType', v)}>
                              <SelectTrigger className="bg-white"><SelectValue placeholder="Choose project type..." /></SelectTrigger>
                              <SelectContent>
                                {['Cybersecurity Implementation', 'Network Infrastructure Setup', 'Fiber Optic Installation (Backbone / FTTH / Structured Cabling)', 'Cloud Migration', 'Web Development / Hosting', 'IT Consulting', 'CCTV Surveillance System Installation', 'ACS (Access Control System / Biometrics / Smart Security)', 'Other'].map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Project Description</label>
                          <Textarea placeholder="Give us an overview of your project requirements..." rows={4} value={formData.projectDescription} onChange={(e) => updateField('projectDescription', e.target.value)} />
                        </div>
                      </TabsContent>

                      {/* --- 4. SALES TAB --- */}
                      <TabsContent value="sales" className="mt-0 space-y-6 animate-in fade-in slide-in-from-bottom-2">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Company Name / Organization</label>
                            <Input placeholder="Your Company" value={formData.company} onChange={(e) => updateField('company', e.target.value)} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Interested Services</label>
                            <Select onValueChange={(v) => updateField('interestedServices', v)}>
                              <SelectTrigger className="bg-white"><SelectValue placeholder="Interested in..." /></SelectTrigger>
                              <SelectContent>
                                {['Cybersecurity', 'Network Infrastructure', 'Fiber Installation', 'CCTV', 'ACS / Security Systems', 'Cloud / Web Services'].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Request Details / Quote Description</label>
                          <Textarea placeholder="Ask about pricing or request a formal quote..." rows={4} value={formData.quoteDetails} onChange={(e) => updateField('quoteDetails', e.target.value)} />
                        </div>
                      </TabsContent>

                      {/* Sub-fields: Urgency & Contact Method (Shared) */}
                      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                        <div className="space-y-3">
                          <label className="text-xs uppercase tracking-widest font-bold text-slate-400 flex items-center"><Clock className="w-3 h-3 mr-2" /> Urgency Level</label>
                          <RadioGroup defaultValue="Medium" onValueChange={(v) => updateField('urgency', v)} className="flex flex-wrap gap-4">
                            {['Low', 'Medium', 'High', 'Critical'].map(u => (
                              <div key={u} className="flex items-center space-x-2 bg-slate-100/50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-200 transition-colors">
                                <RadioGroupItem value={u} id={`u-${u}`} />
                                <label htmlFor={`u-${u}`} className="text-xs font-bold text-slate-600 cursor-pointer">{u}</label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs uppercase tracking-widest font-bold text-slate-400">Contact Method</label>
                          <div className="flex flex-wrap gap-4">
                            {['Email', 'Phone', 'Meeting'].map(m => (
                              <label key={m} className="flex items-center space-x-2 bg-slate-100/50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm cursor-pointer hover:bg-slate-200 transition-colors">
                                <Checkbox onCheckedChange={(c) => handleCheckboxChange(m, c as boolean)} />
                                <span className="text-xs font-bold text-slate-600">{m}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Button type="submit" disabled={isSubmitting} className="w-full h-16 text-lg font-black uppercase tracking-widest shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99] rounded-2xl bg-blue-700 hover:bg-blue-800 text-white">
                        {isSubmitting ? (
                          <span className="flex items-center animate-pulse"><Clock className="w-6 h-6 mr-3 animate-spin" /> Processing...</span>
                        ) : (
                          <span className="flex items-center">Submit {activeTab} Request <Send className="ml-3 w-6 h-6" /></span>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Tabs>
          </div>

          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {contactInfo.map((info, index) => (
              <Card key={index} className="overflow-hidden border-slate-200 shadow-lg rounded-2xl group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400">{info.label}</p>
                      {info.values ? (
                        <div className="flex flex-col space-y-1.5 pt-1">
                          {info.values.map(email => (
                            <a key={email} href={`mailto:${email}`} className="font-bold text-slate-800 hover:text-blue-600 transition-colors break-all text-sm leading-tight">
                              {email}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a href={info.href} className="font-bold text-slate-800 hover:text-blue-600 transition-colors block text-lg">
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <iframe
            title="ITSEC Technology Office Location - Kirkos Church, Addis Ababa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9329!2d38.7537!3d9.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sKirkos%2C+Addis+Ababa%2C+Ethiopia!5e0!3m2!1sen!2set!4v1!"
            width="100%"
            height="400"
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
