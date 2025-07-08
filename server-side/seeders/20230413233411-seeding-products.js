"use strict";

const productsData = [
  {
    name: "React Supabase Full Course",
    slug: "react-supabase-full-course",
    description:
      "Build and deploy a full-stack, production-ready web app with Supabase, React, and Postgres.",
    price: 140000,
    mainImg: "https://i.ytimg.com/vi/zBZgdTb-dns/maxresdefault.jpg",
    categoryName: "Web Development",
    authorEmail: "admin@admin.com",
  },
  {
    name: "Modern JavaScript Full Course",
    slug: "modern-javascript-full-course",
    description: "Learn how to build real-world applications with JavaScript",
    price: 80000,
    mainImg: "https://i.ytimg.com/vi/DHjqpvDnNGE/maxresdefault.jpg",
    categoryName: "Mobile Development",
    authorEmail: "admin@admin.com",
  },
  {
    name: "Next.js Firebase Full Course",
    slug: "next-js-firebase-full-course",
    description: "Build a full-stack app with React, Firebase, and Next.js",
    price: 120000,
    mainImg: "https://i.ytimg.com/vi/TNhaISOUy6Q/maxresdefault.jpg",
    categoryName: "Web Development",
    authorEmail: "admin@admin.com",
  },
  {
    name: "Flutter Firebase",
    slug: "flutter-firebase",
    description: "Build a full-stack Flutter app with Firebase from scratch.",
    price: 100000,
    mainImg: "https://i.ytimg.com/vi/lHhRhPV--G0/maxresdefault.jpg",
    categoryName: "Data Science",
    authorEmail: "admin@admin.com",
  },
  {
    name: "Python Django Full Course",
    slug: "python-django-full-course",
    description: "Learn how to build web applications with Python and Django",
    price: 90000,
    mainImg: "https://i.ytimg.com/vi/F5mRW0jo-U4/maxresdefault.jpg",
    categoryName: "Mobile Development",
    authorEmail: "admin@admin.com",
  },
  {
    name: "GraphQL Full Course",
    slug: "graphql-full-course",
    description:
      "Learn how to build a GraphQL server and client with Node.js and React",
    price: 110000,
    mainImg: "https://i.ytimg.com/vi/ed8SzALpx1Q/maxresdefault.jpg",
    categoryName: "Web Development",
    authorEmail: "admin@admin.com",
  },
  {
    name: "React - The full course",
    slug: "react---the-full-course",
    description:
      "Learn the fundamentals of React.js by building five apps from scratch.",
    price: "200000",
    mainImg: "https://img.youtube.com/vi/Tn6-PIqc4UM/maxresdefault.jpg",
    categoryName: "Web Development",
    authorEmail: "admin@admin.com",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    // First, get all categories to map names to IDs
    const categories = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Categories";',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.name] = cat.id;
    });

    // Get all users to map emails to IDs
    const users = await queryInterface.sequelize.query(
      'SELECT id, email FROM "Users";',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    
    const userMap = {};
    users.forEach(user => {
      userMap[user.email] = user.id;
    });

    // Map products data to include actual category and author IDs
    let toSeed = productsData.map((ele) => {
      return {
        ...ele,
        categoryId: categoryMap[ele.categoryName],
        authorId: userMap[ele.authorEmail],
        updatedAt: new Date(),
        createdAt: new Date(),
      };
    });

    // Remove categoryName and authorEmail from the final data
    toSeed = toSeed.map(({ categoryName, authorEmail, ...rest }) => rest);

    await queryInterface.bulkInsert("Products", toSeed, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
