let destination = [
  {
    id: 1,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-1.jpg",
    alt: "des-1",
    delay: 150,
  },
  {
    id: 2,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-2.jpg",
    alt: "des-2",
    delay: 300,
  },
  {
    id: 3,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-3.jpg",
    alt: "des-3",
    delay: 450,
  },
  {
    id: 4,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-4.jpg",
    alt: "des-4",
    delay: 600,
  },
  {
    id: 5,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-5.jpg",
    alt: "des-5",
    delay: 750,
  },
  {
    id: 6,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-6.jpg",
    alt: "des-6",
    delay: 900,
  },
  {
    id: 7,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-7.jpg",
    alt: "des-7",
    delay: 1150,
  },
  {
    id: 8,
    title: "Tours & travel",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    image: "./assets/images/des/des-8.jpg",
    alt: "des-8",
    delay: 1300,
  }
]

let services = [
  {
    id: 1,
    title: "Worldwide",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-globe",
    delay: 150,
  },
  {
    id: 2,
    title: "Adventures",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-hiking",
    delay: 300,
  },
  {
    id: 3,
    title: "Food & Drinks",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-utensils",
    delay: 450,
  },
  {
    id: 4,
    title: "Affordable Hotels",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-hotel",
    delay: 600,
  },
  {
    id: 5,
    title: "Affordable Price",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-wallet",
    delay: 750,
  },
  {
    id: 6,
    title: "24/7 Support",
    parraf: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
    icon: "fas fa-headset",
    delay: 900,
  },
]

let gallery = [
  {
    id:1,
    image: "./assets/images/gallery/gallery-img-1.jpg",
    country: "brazil",
    delay: 150
  },
  {
    id:2,
    image: "./assets/images/gallery/gallery-img-2.jpg",
    country: "Greenland",
    delay: 300
  },
  {
    id:3,
    image: "./assets/images/gallery/gallery-img-3.jpg",
    country: "Alaska",
    delay: 450
  },
  {
    id:4,
    image: "./assets/images/gallery/gallery-img-4.jpg",
    country: "Thailand",
    delay: 150
  },
  {
    id:5,
    image: "./assets/images/gallery/gallery-img-5.jpg",
    country: "Iceland",
    delay: 300
  },
  {
    id:6,
    image: "./assets/images/gallery/gallery-img-6.jpg",
    country: "Australia",
    delay: 450
  },
  {
    id:7,
    image: "./assets/images/gallery/gallery-img-7.jpg",
    country: "Maldive",
    delay: 150
  },
  {
    id:8,
    image: "./assets/images/gallery/gallery-img-8.jpg",
    country: "Sweden",
    delay: 300
  },
  {
    id:9,
    image: "./assets/images/gallery/gallery-img-9.jpg",
    country: "Switze",
    delay: 450
  },
]

let blog = [
  {
    id: 1,
    title: "Life is a Journey",
    image: "./assets/images/blog/blog-1.jpg",
    date: "21st may, 2021",
    autor: "travelerAdmin@email.com",
    delay: 150
  },
  {
    id: 2,
    title: "Travel is Wonderful",
    image: "./assets/images/blog/blog-1.jpg",
    date: "16st abr, 2020",
    autor: "useTravelAdmin@email.com",
    delay: 300
  },
  {
    id: 3,
    title: "traveling is a dream",
    image: "./assets/images/blog/blog-3.jpg",
    date: "01st mar, 2022",
    autor: "dreamTravelerAdmin@email.com",
    delay: 450
  }
]

destination = JSON.stringify(destination);
services = JSON.stringify(services);
gallery = JSON.stringify(gallery);
blog = JSON.stringify(blog);

export { destination, services, gallery, blog };