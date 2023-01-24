export enum SelectedPage {
    Home = "home",
    Program = "program",
    Benefits = "benefits",
    Location = "location",
    ContactUs = "contactus",
    Testimonials = "testimonials"
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface TestimonialType {
    title: string;
    description?: string;
    image: string;
}