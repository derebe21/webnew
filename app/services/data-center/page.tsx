import { PartnerSolutionTemplate } from '@/components/templates/PartnerSolutionTemplate';

export default function DataCenterSolutionsPage() {
  return (
    <PartnerSolutionTemplate
      partnerName="ITSEC Technology"
      title="Data Center Infrastructure Solutions"
      description="Design, build, and optimize high-density data centers that provide maximum uptime, scalability, and energy efficiency."
      longDescription="<p>The modern data center is the beating heart of digital business. As workloads become more demanding—driven by AI, big data, and cloud computing—the underlying physical infrastructure must evolve to support massive scale and thermal requirements.</p><p>ITSEC Technology provides end-to-end data center engineering. From precision cooling and intelligent power distribution to robust structured cabling and environmental monitoring, we build TIA-942 compliant facilities that guarantee continuous operations.</p>"
      logoUrl="" // No specific logo, just the ITSEC brand implied
      bannerUrl="/images/data-center-main.jpg"
      themeColor="#1e3a8a" // ITSEC Blue
      features={[
        {
          title: 'Precision Cooling Systems',
          description: 'Advanced thermal management (CRAC, In-Row, Liquid Cooling) to support high-density AI and compute racks.',
          icon: 'zap'
        },
        {
          title: 'Uninterruptible Power Supply',
          description: 'Modular UPS systems and smart PDUs that ensure clean, resilient power delivery under all conditions.',
          icon: 'shield'
        },
        {
          title: 'Environmental Monitoring',
          description: 'Real-time sensors for temperature, humidity, and leak detection integrated into centralized DCIM software.',
          icon: 'server'
        },
        {
          title: 'Structured Cabling',
          description: 'High-bandwidth fiber optic and copper trunking designed for scalability and optimized airflow.',
          icon: 'network'
        }
      ]}
    />
  );
}
