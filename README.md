### Zomato Cloning

Zomato Cloning is a project that replicates key features of the popular restaurant discovery and food delivery app, Zomato. This clone allows users to browse through various restaurants, add items to their cart, and perform user authentication to access additional features.
Features

    Restaurant Browsing:
        Users can scroll through a list of restaurants.
        Each restaurant displays relevant information such as name, cuisine, ratings, and images.
        Detailed view of each restaurant with menu items.

    Add to Cart:
        Users can add menu items to their cart from any restaurant.
        View manage items in the cart.

    User Authentication:
        Users can sign up with their email and name.
        Users can log in to access personalized features using otp.
        Authenticated users can add items to their cart and proceed to checkout.

## Installation

To get started with the Zomato Cloning project, follow these steps:
Prerequisites

    Node.js
    MongoDB
    Git
Setup

     Clone the Repository:
          git clone https://github.com/yourusername/zomato-cloning.git
          cd zomato-cloning

    Install Dependencies:
         npm install

    Configure MongoDB:
         Ensure MongoDB is running on your local machine. The default MongoDB URI is used in this project:
              mongodb://localhost:27017/zomato_cloning

    Set Up Environment Variables:
           Create a .env file in the root directory with the following content:

                 .env
                   MONGO_URI=mongodb://localhost:27017/zomato_cloning
                   JWT_SECRET=your_jwt_secret
                   SMTP_USER=your_email
                  SMTP_PASS=your_app_pass

                 Replace your_jwt_secret with a secret key of your choice for JWT authentication.

    Start the Server:
          npm start
