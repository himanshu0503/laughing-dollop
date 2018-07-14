const recommendationJSON = {
  "sanjeev kapoor": [
    {
      "imgLink": 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Gulab-E-Gulkand---Cook-Smart-Sanjeev-Kapoor-Kitchen-FoodFood.jpg',
      "dishName": "Gulab-E-Gulkand",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Peri-Peri-Paneer--Sanjeev-Kapoor-Kitchen-FoodFood.jpg',
      "dishName": "Peri Peri Paneer",
      "cuisine": "Rainbow"
    },
    {
      "imgLink": 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Chicken-Chole-Sanjeev-Kapoor-Kitchen-FoodFood.jpg',
      "dishName": "Chicken Chole",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Bajra-Atta-Halwa-Turban-Tadka-FoodFood.jpg',
      "dishName": "Bajra Atta Halwa",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Aam-Ka-Panna-by-Alyona-Kapoor.JPG',
      "dishName": "Aam Ka Panna",
      "cuisine": "Indian"
    }
  ],
  "tarla dalal": [
    {
      "imgLink": 'https://www.tarladalal.com/members/9306/big/big_multigrain_roti__(__breakfast_recipes)-9462.jpg',
      "dishName": "Multigrain Roti",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.tarladalal.com/members/9306/big/big_cabbage_and_paneer_sandwich-8387.jpg',
      "dishName": "Paneer Sandwich",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.tarladalal.com/members/9306/big/big_rice_and_moong_dal_idli-7684.jpg',
      "dishName": "the dish name3",
      "cuisine": ""
    },
    {
      "imgLink": 'https://cdn.rawgit.com/do-web/jTinder/master/img/pane/pane4.jpg',
      "dishName": "Rice and Moong Dal Idli",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://www.tarladalal.com/members/9306/big/big_feta_and_pineapple_sandwich-11654.jpg?size=696X905',
      "dishName": "Feta and Pineapple Sandwich",
      "cuisine": "Spanish"
    }
  ],
  "Yummy Indian Kitchen": [
    {
      "imgLink": 'https://yummyindiankitchen.com/wp-content/uploads/2015/12/chicken-pakoda-recipe-chicken-pakodi.jpg',
      "dishName": "Chicken Pakoda",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://yummyindiankitchen.com/wp-content/uploads/2017/06/chicken-biryani-recipe-how-to-make-chicken-biryani.jpg',
      "dishName": "Chicken Biryani",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://yummyindiankitchen.com/wp-content/uploads/2016/11/aloo-samosa-recipe-punjabi.jpg',
      "dishName": "Aloo Samosa",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://yummyindiankitchen.com/wp-content/uploads/2018/04/rose-falooda-recipe-royal-falooda.jpg',
      "dishName": "Rose Faluda",
      "cuisine": "Indian"
    },
    {
      "imgLink": 'https://yummyindiankitchen.com/wp-content/uploads/2017/02/lauki-kheer-recipe.jpg',
      "dishName": "Kaddu ki Kheer",
      "cuisine": "Indian"
    }
  ]
};

module.exports = (req, res) => {
  res.render('../public/views/recommendation.ejs', {
    recommendedRestaurants: recommendationJSON
  });
};
