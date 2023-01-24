export enum SelectedPage {
    Home = "home",
    Programs = "programs",
    Benefits = "benefits",
    Location = "location",
    ContactUs = "contactus",
    Testimonials = "testimonials"
}

export interface ProgramType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface TestimonialType {
    title: string;
    description?: string;
    image: string;
}