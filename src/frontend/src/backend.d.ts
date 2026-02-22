import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Project {
    title: string;
    link: string;
    description: string;
}
export interface ContactInfo {
    linkedin: string;
    name: string;
    email: string;
    phone: string;
}
export interface backendInterface {
    addMarketingProject(title: string, description: string, link: string): Promise<void>;
    addSocialMediaProject(title: string, description: string, link: string): Promise<void>;
    addWebDevProject(title: string, description: string, link: string): Promise<void>;
    getContactInfo(): Promise<ContactInfo>;
    getMarketingProjects(): Promise<Array<Project>>;
    getSocialMediaProjects(): Promise<Array<Project>>;
    getWebDevProjects(): Promise<Array<Project>>;
    setContactInfo(name: string, email: string, phone: string, linkedin: string): Promise<void>;
}
