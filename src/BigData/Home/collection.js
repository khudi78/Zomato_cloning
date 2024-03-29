const collections = [
  {
    id: 1,
    name: "6 Taj View Restaurants",
    num_places: "5 Places",
    url: "/agra/6-taj-view-restaurants",
    image: {
      url: "https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png",
      base64:
        "data:image/png;base64,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",
    },
  },
  {
    id: 2,
    name: "14 Local Favourite Places",
    num_places: "14 Places",
    url: "/agra/6-local-favourite-places",
    image: {
      url: "https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png",
      base64:
        "data:image/png;base64,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",
    },
  },
  {
    id: 3,
    name: "18 Best Luxury Dining Places",
    num_places: "18 Places",
    url: "/agra/fine-dining-restaurants",
    image: {
      url: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg",
      base64:
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAcFBggCAwT/xAArEAABAwMDAwMDBQAAAAAAAAABAAIDBAURBgcSITFxCBMjFDNBMjVRYYH/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQABQH/xAAgEQACAwABBAMAAAAAAAAAAAAAAQIDERIhMTJBBBMz/9oADAMBAAIRAxEAPwCweoyIu4kLP8Acx3ZaL9QIyG9Eh6WIPfghJlLGV1tpIkbPc5KfDfwrdTXb4QeKrNPbuJDy3orBSQc4+LG5UV80vRdSlI8K7UMvB0bOgKmNqZXS6jjcfyVBV1rcHnLSFdNqrNNHeI5eB457p1Ul0wRdJJNGio/tt8BC7Y08G+EK05ol98ab6gtaO6R9NQmOuaw98p5b2VRppWODSUkBXufcGyBh7qacXuotqa44xhTWxgsjHBo5Y7qT0TZ2yTtMrchRDLq6S1MaW9AFJ6c1CykcMt7KdphNpddJjVtkiZUNMTQArroShjhp4yGDKXd61S2rlaGNyrpoe+h5jhc3BKKtPkDLrDdGaB0CFy1+WgoVxEJ3euenij+UAlJO31NLUSOAaA4FOXey0vrXBwdgBIB1PLba5xIPHKDVuaFZCXBSQyLSKadjYpZA0KXkpLZRtz7rSfKTct7fHVZa/iB/a+eXUz5agMdMceVvrcmeJKMOWF6vt8pqKr+HB6q5bb3l9fdIRwICQ09R9VcosO5AkLTO1VpgZT00wYA7A6rWZDBfx05cn6HJH9tvgIXbWjiPCEeh4LXdP9CQ1+aPbccBCFHPzOlV+Yp784iqdgkf6oeJx94dShC6VfiR2dy02PrURZ/kLWu137fT+AhCmu7o0OzGuOwQhCMUf//Z",
    },
  },
  {
    id: 4,
    name: "6 Best Mughlai Places",
    num_places: "6 Places",
    url: "/agra/5-best-mughlai-places",
    image: {
      url: "https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png",
      base64:
        "data:image/png;base64,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tPEE8mjjCeTRxhPIo41/A8oVaIJ8gHxUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA1LTIyVDEyOjUwOjE5KzA1OjAwuhq+rAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNS0yMlQxMjo1MDoxOSswNTowMMtHBhAAAABDdEVYdHNvZnR3YXJlAGZpbGU6Ly8vdXNyL3NoYXJlL2RvYy9pbWFnZW1hZ2ljay02LWNvbW1vbi9odG1sL2luZGV4Lmh0bWwP1+U4AAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MDB5WmnbAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1MDDB/2DUAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2ODQ3NDAwMTmt519YAAAAEnRFWHRUaHVtYjo6U2l6ZQA2MTlLQkLU4xh+AAAAIHRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3BocFBQOEkyU1sZNNsAAAAASUVORK5CYII=",
    },
  },
  {
    id: 5,
    name: "12 Blissful Breakfast Places",
    num_places: "12 Places",
    url: "/agra/great-breakfasts",
    image: {
      url: "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg",
      base64:
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAQCAwUGBwEI/8QAKhAAAQMCBAQGAwAAAAAAAAAAAQACAwQFBhETIRIUMZEHQVFSYXFCU4H/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQQD/8QAHhEBAAMAAgIDAAAAAAAAAAAAAAECEQMhEiIxQVH/2gAMAwEAAhEDEQA/APqlFa5iI/m3uvRNGejwguIqDNGOrgmtH7wgrRUasfuHdBLGejggrRUarPcEQfHlj8VLvVVAY6Y7/K3CPHt0hlYDIXA/K4/aMD3+nna/lpB/Fvtow/d9eIz07yB6hZOSl53vpsremfHbap8a3mSZvA5waVMqsR359KHwFxICwN8sV54mOpoHADyAWUsMd6EYhmpnb7ZkLPM8lc8fpZms7rGP8QL9E7TlDgR5rM4ZxzXzVHDUSnf5WTrsHzVNE+Qw5SEZ9Fp2HsK3OnvBdNE/TDvRd6ctrw45Dqou9Y4Ah533RWGMla0N0XbDLoivsvX46SLTRjpAzsqhbaUdIWdlMRa2dGNDTkZGJvZeNoKZpzETQfpSkUyBb0I+HLhGStChpwc9Nuf0pKJkGo3JQfrb2RSUVBERAREQEREBERB//9k=",
    },
  },
  {
    id: 6,
    name: "13 Serene Rooftop Places",
    num_places: "14 Places",
    url: "/agra/rooftop",
    image: {
      url: "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1684741669.jpg",
      base64:
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIEAwUGCAf/xAArEAABAwIEAwgDAAAAAAAAAAAAAQIEAwURE1KRBgchEhQVFyNDU3EiUWH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAwQCAf/EAB0RAQACAwADAQAAAAAAAAAAAAABAgMRIQQSE0H/2gAMAwEAAhEDEQA/APVIMedT1oFr09abgZAQzqepBms1IBMEM1mpBms1IBMGPPp60AHlqPzXl1mdKq4/ZmTmFd5KolGou5xEbgC60ujKD9jcweEL3HRHNpP6fw4rj32sq3yRE6tHH0Sz8SXqTR/Ny4kpnFd3iMdirlwOTt6X+HVRqxnq36NvMhXibHVUjuRVT9GH08j6a/GqbYYpvanX5k3KjU9RyohOvzUr936VF7RzczhC71nO7dB+xTTgq5KxWrGfj9Gq1expDHPJmW3XmtPxX1F3BoPL+6fA/YFtQ4exUtsVPZZsS7hGwwym7FoHqSktsiKuOSzYyNgR2pglJuxZAFVbfGX2m7EfDYvws2LgAqeHRfibsC2AAAAAAAAAAAA//9k=",
    },
  },
  {
    id: 7,
    name: " 19 Great Cafes",
    num_places: "19 Places",
    url: "/agra/best-cafes",
    image: {
      url: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg",
      base64:
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgMGBgMAAAAAAAAAAAECAwQFEQeRBjGBEhMUNFFTFSIjMjNCUmFx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi8TD7jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw71n8kMVqIk5vbuBKCLxMPuN3AHiCm1lvGPnndubDadWbpM1PqOVTrCm02vzpmo6mkxn0O1uFdNqiGmj72B3b/tBVriU9x1JviQdtiuRCC1am3t0rVle7GTneIeDKxlCjIKdVVE9DhLVwlXq1GyUrkX1wZXi8nW2N1HrnQpl6ouDUOI9T7tSucscy4/0Xvha6xqjaeB+xpt54Mv9QvlpF6HW4ceZWV1ivefzO3BrS6e37PlJNgZg9+JaKJOUDNiZlDTt+2NqdCyCBXfRQPTDo2r0MG22lauUibsWwBTdbaVy5WJq9DFbVRrzgZsXgBQ+EUXsM2BfAAAAAAAAAAAAf//Z",
    },
  },
  {
    id: 8,
    name: " 13 Best Bars & Pubs",
    num_places: "13 Places",
    url: "/agra/best-bars-and-pubs",
    image: {
      url: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg",
      base64:
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAcECAEDBgUC/8QAKRAAAgIBAgUDBAMAAAAAAAAAAQIAAxEEBQcIEiFxBiMxEzIzQRUiQv/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEFAP/EAB8RAAMAAgICAwAAAAAAAAAAAAABAgMRBCESMSIyQf/aAAwDAQACEQMRAD8Akc0YyUlctLSSsspzNp1ukQm1aJr7lRB8w3SmQ8WN1RAGkb5xJ+n0TFc/qetuuhfQqA4mrQM9qFUTMSsu1suri/iZu2/RdRAxGpwj2pK99qsx3zFjt+os02qxYh6Y1uFO51X79WidjmEvl2iXInHTLMVr7a+BCZrPtr4EJogrlzLH3EiV2K+uhgx7GOfmZOHSIHTkivMHJPlOizi2ppM6/dAmuo+o1gyP1NGxumkJJUGc2l97dgxCyXW1q1/1JMmWKktbOnWeHW0jqAlestcqoDGdpwl2Syj1DXaW7Ziv27U3Vlm75jH4QblqLfUVaOT05jImp6RLyLx3tstXWvtr4EJisn6a+BCPOWVt5ns9aYiG23oNfuNHxzQHBSVrS5x2Bm1PlOh2DIsdeT7Oo1T01UZrIzNOi1g6G6p4wd3QAkz6ryBjMXOLS02PzZru05Wke9Rre5jK4MXq/qOv4+Ym6mfOBGtwPqsHqOpiDjMPWiWsdvbbLh1/jXwIT5qz9NPAhPCytnND9yStS/EIRi9Gz7JVf2iZ/wBQhMKCbofyCOzgwB/M09h8whF0G/qy01f418CEITSM/9k=",
    },
  },
  {
    id: 9,
    name: "7 Bingeworthy Desserts",
    num_places: "7 Places",
    url: "/agra/bingeworthy-desserts",
    image: {
      url: "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043081.png",
      base64:
        "data:image/png;base64,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",
    },
  },
];

export default collections;
