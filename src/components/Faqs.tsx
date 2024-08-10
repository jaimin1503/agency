import { IconCloudDemo } from "./IconCloudDemo"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
	{
		question: "What services does your software company offer?",
		content:
			"We offer a wide range of services including web and mobile application development, backend development, UI/UX design, software testing, SEO, and ongoing support and maintenance. Our goal is to provide end-to-end solutions that cater to all your software needs.",
	},
	{
		question: "How does your development process work?",
		content:
			"Our development process begins with understanding your project requirements, followed by planning, design, development, testing, and deployment. We follow agile methodologies to ensure flexibility and timely delivery of high-quality software.",
	},
	{
		question: "What industries do you specialize in?",
		content:
			"We have experience working across various industries, including healthcare, finance, e-commerce, education, and more. Our team is equipped to handle projects in any sector, ensuring customized solutions that meet industry-specific needs.",
	},
	{
		question: "Do you offer post-launch support and maintenance?",
		content:
			"Yes, we provide comprehensive post-launch support and maintenance services to ensure your software remains up-to-date, secure, and fully functional. Our team is always available to address any issues or updates that may be needed.",
	},
	{
		question: "How do you ensure the security of your software products?",
		content:
			"Security is a top priority for us. We implement best practices in software security, including encryption, secure coding practices, regular security audits, and compliance with industry standards to protect your data and applications.",
	},
	{
		question: "Can you work with our existing systems and technologies?",
		content:
			"Absolutely. We have extensive experience integrating new solutions with existing systems and technologies. Our team will work closely with you to ensure seamless integration and compatibility with your current infrastructure.",
	},
];
export const Faqs = () => {
	return (
		<div className=" flex flex-col items-center justify-center">
			<h1 className=" text-3xl sm:text-5xl font-bold heading-gradient p-2">Technologies we use</h1>
			<div className=" flex flex-col md:flex-row w-screen justify-evenly items-center">
				<div className="icon-cloud w-1/2">
					<IconCloudDemo />
				</div>
				<div className="accordion w-1/2 m-2">
					{
						faqs.map((faq, index) => (
							<Accordion type="single" collapsible className="w-full p-2" key={index}>
								<AccordionItem value={`item-${index}`}>
									<AccordionTrigger>{faq.question}</AccordionTrigger>
									<AccordionContent>
										{faq.content}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						))
					}
				</div>
			</div>
		</div>
	)
}