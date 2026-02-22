import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Project = {
    title : Text;
    description : Text;
    link : Text;
  };

  module Project {
    public func compare(project1 : Project, project2 : Project) : Order.Order {
      Text.compare(project1.title, project2.title);
    };
  };

  type ContactInfo = {
    name : Text;
    email : Text;
    phone : Text;
    linkedin : Text;
  };

  let marketingProjects = Map.empty<Text, Project>();
  let webDevProjects = Map.empty<Text, Project>();
  let socialMediaProjects = Map.empty<Text, Project>();

  var contactInfo : ?ContactInfo = ?{
    name = "Thanisha Ivana";
    email = "thanishaivana004@gmail.com";
    phone = "7997411133";
    linkedin = "thanishaivana.com";
  };

  public shared ({ caller }) func addMarketingProject(title : Text, description : Text, link : Text) : async () {
    let project : Project = {
      title;
      description;
      link;
    };
    marketingProjects.add(title, project);
  };

  public shared ({ caller }) func addWebDevProject(title : Text, description : Text, link : Text) : async () {
    let project : Project = {
      title;
      description;
      link;
    };
    webDevProjects.add(title, project);
  };

  public shared ({ caller }) func addSocialMediaProject(title : Text, description : Text, link : Text) : async () {
    let project : Project = {
      title;
      description;
      link;
    };
    socialMediaProjects.add(title, project);
  };

  public shared ({ caller }) func setContactInfo(name : Text, email : Text, phone : Text, linkedin : Text) : async () {
    contactInfo := ?{
      name;
      email;
      phone;
      linkedin;
    };
  };

  public query ({ caller }) func getMarketingProjects() : async [Project] {
    marketingProjects.values().toArray().sort();
  };

  public query ({ caller }) func getWebDevProjects() : async [Project] {
    webDevProjects.values().toArray().sort();
  };

  public query ({ caller }) func getSocialMediaProjects() : async [Project] {
    socialMediaProjects.values().toArray().sort();
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    switch (contactInfo) {
      case (null) { Runtime.trap("Contact information not set") };
      case (?info) { info };
    };
  };
};
