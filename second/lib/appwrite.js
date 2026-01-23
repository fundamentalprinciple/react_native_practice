import { Client, Account, ID } from 'react-native-appwrite';     
const client = new Client()
    .setProject("6971d0200037891233d4")
    .setPlatform("dev.princedixit.second");
client.ping()

export const account = new Account(client);
export const avatars = new Avatars(client);

