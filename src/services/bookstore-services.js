import React from 'react'

export default class BookstoreService extends React.Component{
    constructor(){
        super()
        this.data = [
          {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
          },
          {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
          },
          {
            id: 3,
            title: 'Learning React: Modern Patterns for Developing React Apps',
            author: 'Alex Banks & Eve Porcello',
            price: 39,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
          },
          {
            id: 4,
            title: 'JavaScript Everywhere: Building Cross-Platform Applications with GraphQL, React, React Native, and Electron',
            author: 'Adam D. Scott',
            price: 29,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51sLoT+bdsL._SX379_BO1,204,203,200_.jpg'
          },
          {
            id: 5,
            title: 'Secrets of the JavaScript Ninja ',
            author: 'John Resig, Bear Bibeault, Josip Maras',
            price: 26,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51u9Pg4riRL._SX397_BO1,204,203,200_.jpg'
          },
          {
            id: 6,
            title: "You Don't Know JS: Scope & Closures",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41ultdqyvXL._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 7,
            title: "You Don't Know JS: this & Object Prototypes",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41MZdroe73L._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 8,
            title: "You Don't Know JS: Async & Performance",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Kb27EcNPL._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 9,
            title: "You Don't Know JS: Types & Grammar",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51AV-M7-u9L._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 10,
            title: "You Don't Know JS: ES6 & Beyond",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/410+tmN-P+L._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 11,
            title: "You Don't Know JS: Up & Going",
            author: 'Kyle Simpson',
            price: 17,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41kn-mEpe6L._SX331_BO1,204,203,200_.jpg'
          },
          {
            id: 12,
            title: 'Learning React: Functional Web Development with React and Redux',
            author: 'by Alex Banks, Eve Porcello',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX379_BO1,204,203,200_.jpg'
          },
          {
            id: 13,
            title: 'Learn React Hooks: Build and refactor modern React.js applications using Hooks',
            author: ' Daniel Bugl',
            price: 40,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/512zOgsWmdL._SX404_BO1,204,203,200_.jpg'
          },
          {
          id: 14,
          title: "CSS in Depth",
          author: 'Keith J. Grant',
          price: 43,
          coverImage: 'https://m.media-amazon.com/images/I/71aY6kyvvsL._AC_AA180_.jpg'
          },
          {
            id: 15,
            title: "Redux in Action ",
            author: 'Marc Garreau',
            price: 34,
            coverImage: 'https://m.media-amazon.com/images/I/71cDJw6J2FL._AC_AA180_.jpg'
          },
          {
            id: 16,
            title: 'React in Action',
            author: 'Mark Tielens Thomas',
            price: 35,
            coverImage: 'https://m.media-amazon.com/images/I/71W632wBuWL._AC_AA180_.jpg'
          }
        ];
    }
    getBooks = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(Math.random() > 0.75){
            reject(new Error('Something is wrong'))
          }else{
            resolve(this.data)
          }
        }, 1000)
      })

    }
  }