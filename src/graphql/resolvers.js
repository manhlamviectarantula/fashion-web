// Define the resolvers
const resolvers = {
    Query: {
        books: async () => await Book.find(),
        authors: async () => await Author.find(),
        book: async (parent, args) => await Book.findById(args.id),
        author: async (parent, args) => await Author.findById(args.id),
    },
    Mutation: {
        addBook: async (parent, args) => {
            const book = new Book({ title: args.title, authorId: args.authorId });
            return await book.save();
        },
        addAuthor: async (parent, args) => {
            const author = new Author({ name: args.name });
            return await author.save();
        },
    },
    Book: {
        author: async (parent) => await Author.findById(parent.authorId),
    },
    Author: {
        books: async (parent) => await Book.find({ authorId: parent.id }),
    },
};