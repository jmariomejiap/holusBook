# Holus Book

**Holus Book** is an App that I developed as a side project to share some Vegetarian recipes with my friends (meat and Non-Meat eaters) with the hope of solving the “what can I cook for you” dilemma. 

**Holus Book** was built using React Native, React Navigation, Redux, Typescript and AWS S3 Bucket.


## Demo

![newholusbookdemo](https://user-images.githubusercontent.com/22829270/39653526-2fa654a0-4fa6-11e8-961a-35cb0eaafa95.gif)



## Getting Started

#### Installation
Instructions using Yarn but Npm works as well.

```
$ git clone https://github.com/jmariomejiap/holusBook.git
```

Install dependencies.


```
$ yarn install
```


Link native dependencies:
```
$ react-native link
```

Since it is using Typescript, you must generate *js*.
_____ 
Compile and generate

```
$ yarn run build
```
_____ 

For compiling `ts` files and generate `js`, waiting for changes automatically

```
$ yarn run tsc:watch
```
_____ 


Running Holus Book on the Simulator.
```
$ react-native run-ios
```


___
#### Configure Holus Book.
___

Add your own Recipes. It is pretty straight forward.

###### AWS set up.

* Create/Login into your AWS S3 account.
* Create JSON file where you will have all your recipes Data. follow this convention example.

```
[
  {
    "key": "recipe1",
    "title": "Recipe's name",
    "time": "40 minutes",
    "portions": 8,
    "calories": 389,
    "category": "dinner",
    "ingredients": [
      "1 cup of water",
      ...
      "red onion rings"
    ],
    "media": [
      "https://s3-us-west-2.amazonaws.com/<Name of your Project>/recipe_images/<file_name>.jpg"
    ],
    "directions": [
      "In microwave-safe medium bowl, microwave water and bulgur on High 5 to 7 minutes or until liquid is absorbed.",
      ....
      "Spray 12-inch nonstick skillet with cooking spray; heat on medium 1 minute. Add burgers in 2 batches; cook 10 to 12 minutes or until browned, turning once. Serve with buns, lettuce, tomato, and onion, if you like."
    ]
  },
  {
    "key": "recipe2",
    ...
  },
]
```

* Create a folder named **recipe_images** and upload all your recipe pictures.
* Create a folder named **category_images** and upload the images you want to show in each category.


###### Project Set Up.
___
Holus Book has a `config` file, where you will replace the example paths and put your newly created AWS information. 


* Go to the Config file and update **recipesDataPath** and **categoriesPath** paths. 

```
    * App
        * Config
            * index.tsx

```

And that is it. 



## Contributing
I welcome contributions! Please open an issue if you have any feature ideas or find any bugs. I also accept pull requests with open arms. I will go over the issues when I have time. 

:)

