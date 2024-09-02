const authorsDetails = [
  {
    id: 1,
    name: "John Doe",
    booksD: [2],
  },
  {
    id: 2,
    name: "Jane Smith",
    booksD: [1, 2],
  },
  {
    id: 3,
    name: "Bob Johnson",
    booksD: [3],
  },
];
const booksDetails = [
  {
    id: 1,
    title: "Book Title 1",
    authorId: 1,
  },
  {
    id: 2,
    title: "Book Title 2",
    authorId: 2,
  },
  {
    id: 3,
    title: "Book Title 3",
    authorId: 1,
  },
  {
    id: 4,
    title: "Book Title 4",
    authorId: 3,
  },
];

export const resolvers = {
  Book: {
    author: (parent, arg, context, info) => {
      return authorsDetails.find((details) => details.id === parent.authorId);
    },
  },
  Author: {
    books: (parent, arg, context, info) => {
      return booksDetails.filter((details) =>parent.booksD.includes(details.id));
    },
  },
  Query: {
    authors: () => {
      return authorsDetails;
    },
    books: () => {
      return booksDetails;
    },
  },
  Mutation:{
    addBook:(parent,arg,context,info)=>{
      console.log(arg,"hello new post")
    let newBooks={...arg,id:booksDetails.length+1}  
    booksDetails.push(newBooks)
      return newBooks
    }
  }
};
