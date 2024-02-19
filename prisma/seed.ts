// seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    // Sample comments data
    const commentsData = [
      {
        id: "1", // Replace with your desired UUID
        message: "This is a great movie!",
        movieId: "123", // Replace with an existing movieId
      },
      {
        id: "2", // Replace with another UUID
        message: "I enjoyed watching this film.",
        movieId: "456", // Replace with another existing movieId
      },
      // Add more comments as needed
    ];

    // Seed comments
    await prisma.comment.createMany({
      data: commentsData,
    });

    console.log("Seed successful!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect(); // Disconnect from the database
  }
}

// Run the seed function
seed();
