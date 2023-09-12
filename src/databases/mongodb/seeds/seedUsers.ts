import { UserModel } from '../models/userModel';
import { connectMongoDB } from '../dbConnect'; // replace with your actual connection file path

// Sample users
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password',
    isAdmin: false,
    firstTimeLogin: true,
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password',
    isAdmin: true,
    firstTimeLogin: false,
    status: 'active',
  },
  // add more users as needed
];

// Function to seed users
const seedUsers = async () => {
  try {
    await connectMongoDB();
    for (const user of users) {
      const newUser = new UserModel(user);
      await newUser.save();
    }
    console.log('Users seeded successfully');
  } catch (error) {
    console.error(`An error occurred while seeding users: ${error}`);
  }
};

// Call the function to seed users
seedUsers();
