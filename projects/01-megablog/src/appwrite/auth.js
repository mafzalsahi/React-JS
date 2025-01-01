import config from '../config/config'
import {Client,Account,ID} from 'appwrite'

export class AuthService
{
    client=new Client();
    account;
    constructor(){
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId)
                this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            console.log("Creating account with email:", email);
            const userAccount = await this.account.create(ID.unique(), email, password, name);
        
            if (userAccount) {
              console.log("Account created successfully:", userAccount);
              // Check if the user is already logged in before trying to create a session
              const currentUser = await this.getCurrentUser();
            
              if (!currentUser) {
                // Only attempt to create a session if no active session exists
                return this.login({email, password});
              } else {
                console.log("User is already logged in:", currentUser);
                return currentUser;  // Return the current user if logged in
              }
            } else {
              return userAccount;
            }
          } catch (error) {
            console.error("Error creating account:", error);
            throw error;
          }
    }
    async login({email,password}){
        /*try {

            console.log("Logging in with email:", email);//debugging
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.error("Error creating session:", error);
            throw error;
        }*/
            try {
                // Check if a session already exists
                const currentUser = await this.getCurrentUser();
                if (currentUser) {
                  console.log("User is already logged in:", currentUser);
                  return currentUser; // Return the current user if a session is active
                }
                
                console.log("No active session, creating new session with email:", email);
                return await this.account.createEmailPasswordSession(email, password);
              } catch (error) {
                console.error("Error creating session:", error);
                throw error;
              }
    }
    async getCurrentUser() {
      try {
          const user = await this.account.get();
          console.log("Appwrite service :: getCurrentUser :: User fetched successfully:", user);
          return user;
      } catch (error) {
          console.error("Appwrite service :: getCurrentUser :: Error fetching user:", error.message);
  
          // Additional debugging information
          if (error.response) {
              console.error("Response Status:", error.response.status);
              console.error("Response Data:", error.response.data);
          }
  
          // Handle specific error cases (e.g., session not found or invalid)
          if (error.code === 401) {
              console.error("Unauthorized: No active session found.");
          } else if (error.code === 403) {
              console.error("Forbidden: User lacks permissions to access this endpoint.");
          } else {
              console.error("Unexpected error:", error);
          }
  
          return null;
      }
  }    async logout(){
        try {
            return await this.account.deleteSessions();
          } catch (error) {
              console.log("Appwrite service :: logout :: Error ",error)
          } 
    }

}
const authService=new AuthService();

export default authService