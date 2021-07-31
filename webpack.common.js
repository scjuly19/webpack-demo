module.exports = {
  entry: {
    main:'./src/index.js',
    vendor:'./src/vendor.js'},

  module:{
    rules:[{
    test:/\.html$/,
    use:['html-loader']
  },
  {
    test:/\.(.png|.svg|.gif|.jpg)$/,
    type: 'asset/resource',
  
  }
  ]

}
};