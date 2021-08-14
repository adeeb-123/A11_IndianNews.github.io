console.log("Welcome to News API Project");

// API KEY :- bf7d7820f9aa47fea32d27c6815ad666

// THIS API KEY IS NOT FOR EVERYONE TO USE . IF I FOUND SOMEONE TO REUSING OR VALIDATING ON MY API THEN I WILL TAKE AN LEGAL AGAINST HIM/HER.

let apikey = "bf7d7820f9aa47fea32d27c6815ad666";
// Grab the news container
let newsAccordian = document.getElementById("newsAccordian");

// Create a get request
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`,
    true
);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        articles.length = 10;             // Used to set the length or size of the array
        // console.log(articles)
        let newsHtml = "";
        articles.forEach(function (element,index) {
            let news = `<div class="card">
                    <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b>Breaking News${index+1}: </b>${element.title}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                    data-parent="#newsAccordian">
                        <div class="card-body"> ${element.description} <a href="${element.url}" target = "_blank">Read More here</a> </div>
                    </div>
                </div>`;

            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured");
    }
};
xhr.send();
