import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Dieter Bohn",
            "title": "The smartphone, circa 2031",
            "description": "What will smartphones look like 10 years from now? We look at options like modular phones, foldables, smart glasses, and ambient computing.",
            "url": "https://www.theverge.com/22749341/smartphones-future-predictions",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2NJ0V6J5cHFz7KgCW0ZjTwX9aMU=/0x51:2040x1119/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22967765/acastro_futurePhones_lede.jpg",
            "publishedAt": "2021-11-01T12:44:00Z",
            "content": "Small improvements can go in surprising and strange directions What will the smartphone look like in 10 years? The most likely answer, I’m afraid, is one of two options: it’s either completely unknow… [+13852 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "James Vincent",
            "title": "The future of AI is a conversation with a computer",
            "description": "AI writing systems are becoming more and more common, from Google’s suggested replies in Gmail to chatbots powered by OpenAI’s GPT-3. But what do the strengths and weaknesses of these tools tell us about the future of artificial intelligence?",
            "url": "https://www.theverge.com/22734662/ai-language-artificial-intelligence-future-models-gpt-3-limitations-bias",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Co1KRdEAyiP9HGfWBRP6BLOH3R8=/0x736:1080x1301/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22963970/VRG_ILLO_4851_10_Year_ai.jpg",
            "publishedAt": "2021-11-01T13:16:00Z",
            "content": "Illustration by Micha Huigen\r\n\n \n\n\n AI writing tools can tell us a lot about artificial intelligence How would an AI writing program start an article on the future of AI writing? Well, there’s one ea… [+22396 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Nilay Patel",
            "title": "Meta’s Andrew Bosworth on moving Facebook to the metaverse",
            "description": "VP of Reality Labs Andrew Bosworth talks about his long career at Facebook and how building the metaverse is a refocus for the company. He also touches on the new name, Meta, and the Facebook Papers.",
            "url": "https://www.theverge.com/22752986/meta-facebook-andrew-bosworth-interview-metaverse-vr-ar",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/1FK1iuupaZcrx4CKiMHhdbZbx4w=/0x148:2050x1221/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22969597/VRG_ILLO_Decoder_AndrewBosworth_s.jpg",
            "publishedAt": "2021-11-01T13:15:00Z",
            "content": "Grayson Blackmon\r\n\n \n\n\n ‘The magnitude of technological shifts that we are trying to manifest here hasn’t been attempted in a long time’ Last week, Facebook announced a major corporate rebrand by cha… [+38546 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "Australia shares rise on tech boost; Westpac drops on profit miss - Reuters",
            "description": "Australian shares climbed on Monday, kicking off the new month on a positive note, with domestic technology stocks catching the tailwind from a bounce on Wall Street, while Westpac dropped 5.3% after the lender missed annual profit estimates.",
            "url": "https://www.reuters.com/article/australia-stocks-midday-idUSL4N2RR1E5",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-11-01T00:09:00Z",
            "content": "By Reuters Staff\r\nNov 1 (Reuters) - Australian shares climbed on Monday, kicking off the new month on a positive note, with domestic technology stocks catching the tailwind from a bounce on Wall Stre… [+1698 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Staff",
            "title": "S.Korea stocks rise as investors latch on to upbeat export data - Reuters",
            "description": "* KOSPI rises, foreigners net sellers * Korean won weakens against the U.S. dollar * South Korea benchmark bond yield falls SEOUL, Nov 1 (Reuters) - Round-up of South Korean financial markets: ** South Korean shares rose on Monday as risk appetite got a lift …",
            "url": "https://www.reuters.com/article/southkorea-markets-midday-idUSL4N2RS0TG",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2021-11-01T03:19:00Z",
            "content": "By Reuters Staff\r\n* KOSPI rises, foreigners net sellers\r\n * Korean won weakens against the U.S. dollar\r\n * South Korea benchmark bond yield falls\r\nSEOUL, Nov 1 (Reuters) - Round-up of South Korean fi… [+2068 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Futures hit new peaks in a big week for Federal Reserve - Reuters",
            "description": "U.S. stock index futures hit record highs on Monday, led by gains in Tesla and economy-sensitive stocks at the start of a week packed with economic data as well as the Federal Reserve's potential move to slow down bond purchases.",
            "url": "https://www.reuters.com/business/futures-hit-new-peaks-big-week-federal-reserve-2021-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/dbaRpnirDCzklHAvl8K5pkuYmPQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NXNGCPJ3TVIU7A4JOETZ2JSHKI.jpg",
            "publishedAt": "2021-11-01T11:38:00Z",
            "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York City, U.S., October 27, 2021. REUTERS/Brendan McDermidNov 1 (Reuters) - U.S. stock index futures hit record highs on Monday… [+2332 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Devik Jain",
            "title": "Futures hit new peaks in a big week for Federal Reserve - Reuters.com",
            "description": "U.S. stock index futures hit record highs on Monday, led by gains in Tesla and economy-sensitive stocks at the start of a week packed with economic data as well as the Federal Reserve's potential move to slow down bond purchases.",
            "url": "https://www.reuters.com/article/usa-stocks-idUSKBN2HM24Q",
            "urlToImage": "https://static.reuters.com/resources/r/?m=02&d=20211101&t=2&i=1579853009&r=LYNXMPEHA0166&w=800",
            "publishedAt": "2021-11-01T11:39:00Z",
            "content": "(Reuters) - U.S. stock index futures hit record highs on Monday, led by gains in Tesla and economy-sensitive stocks at the start of a week packed with economic data as well as the Federal Reserves po… [+2059 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "China's giant state-owned companies struggle to align climate rhetoric with reality - Reuters",
            "description": "Ambitious pledges from China's leaders to cut emissions have put its giant, carbon-intensive state corporations under pressure to respond, but they are at risk of falling short amid confused policy signals and other constraints.",
            "url": "https://www.reuters.com/business/energy/chinas-giant-state-owned-companies-struggle-align-climate-rhetoric-with-reality-2021-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/Ne8ps_MO_3yNgOkWxsWzzQwxptQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WSJ76CBFVJNPBNDZCHLGX2BWWA.jpg",
            "publishedAt": "2021-11-01T05:56:00Z",
            "content": "Smoke rises from chimneys at a Sinopec refinery in Qingdao, Shangdong province, China, February 9, 2014. REUTERS/China DailySHANGHAI, Nov 1 (Reuters) - Ambitious pledges from China's leaders to cut e… [+4988 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Who's building the metaverse? - Reuters",
            "description": "Facebook <a href=\"https://www.reuters.com/companies/FB.O\" target=\"_blank\">(FB.O)</a> changed its name last week to Meta Platforms Inc to signal its focus on the metaverse, which it thinks will be the successor to the mobile internet.",
            "url": "https://www.reuters.com/technology/whos-building-metaverse-2021-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/8VvvQOanRZlFPrL41m3Of1S6KJ8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ZRSNOYXLRNPDPFGVFXJT3CS5Y.jpg",
            "publishedAt": "2021-11-01T10:15:00Z",
            "content": "Visitors are pictured in front of an immersive art installation titled \"Machine Hallucinations Space: Metaverse\" by media artist Refik Anadol, which will be converted into NFT and auctioned online at… [+4575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Nicholas Sutrich",
            "title": "Samsung and Google's Wear OS 3 secrecy has foiled its success this year",
            "description": "Despite the excitement back in early summer, 2021 will go down as yet another ho-hum year for Google's Wear OS platform. It didn't have to be this way, but Google seems to have some grand last-ditch effort planned that few know about — except for Samsung — an…",
            "url": "https://www.androidcentral.com/samsung-and-googles-secrecy-wear-os-3-has-foiled-its-success-year",
            "urlToImage": "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/10/fossil-gen-6-halloween-watch-face.jpg",
            "publishedAt": "2021-11-01T12:00:03Z",
            "content": "Despite the excitement back in early summer, 2021 will go down as yet another ho-hum year for Google's Wear OS platform. It didn't have to be this way, but Google seems to have some grand last-ditch … [+5586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Associated Press",
            "title": "Hong Kong: Jimmy Lai goes on trial over Tiananmen vigil",
            "description": "Eight pro-democracy activists including the prominent businessman had been charged under national security lawsThe trial of eight pro-democracy activists, including Apple Daily newspaper founder Jimmy Lai, who were charged over their roles in an unauthorised …",
            "url": "https://amp.theguardian.com/world/2021/nov/01/hong-kong-jimmy-lai-goes-on-trial-over-tiananmen-vigil",
            "urlToImage": "https://i.guim.co.uk/img/media/5fa8ead8082fe27f415cc73f221d513b2c3fe3fb/0_164_4930_2958/master/4930.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5dca62dced9901aaf889902c9b657ec1",
            "publishedAt": "2021-11-01T06:29:00Z",
            "content": "The trial of eight pro-democracy activists, including Apple Daily newspaper founder Jimmy Lai, who were charged over their roles in an unauthorised Tiananmen vigil last year began on Monday.\r\nLai and… [+2271 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Here's a First Real-World Look at the New HomePod Mini Colors",
            "description": "At its \"Unleashed\" event last week, Apple announced that the HomePod mini will be available in three new colors starting in November, including yellow, orange, and blue. Apple has yet to provide a specific release date for the new colors.\n\n\n\n\n\nThe first real-…",
            "url": "https://www.macrumors.com/2021/11/01/real-world-photos-of-new-homepod-mini-colors/",
            "urlToImage": "https://images.macrumors.com/t/cDgP6xHFQxGNnjKeg37tugF-RH8=/3564x/https://images.macrumors.com/article-new/2021/10/homepod-mini-new-colors-brian-tong.jpg",
            "publishedAt": "2021-11-01T13:10:47Z",
            "content": "At its \"Unleashed\" event last week, Apple announced that the HomePod mini will be available in three new colors starting in November, including yellow, orange, and blue. Apple has yet to provide a sp… [+594 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Kuo: Apple's 2022 AR/VR Headset to Support Faster Wi-Fi 6E",
            "description": "Apple plans to release its first mixed reality headset with Wi-Fi 6E support in 2022, Apple analyst Ming-Chi Kuo said today in a note sent out to investors.\n\n\n\nConcept render by Antonio De Rosa based on rumors\n\nApple is rumored to be working on at least two A…",
            "url": "https://www.macrumors.com/2021/11/01/apple-ar-vr-headset-wifi-6e-support/",
            "urlToImage": "https://images.macrumors.com/t/GkIAwbKnxOtMT3mvClgQaaHnuQo=/2006x/https://images.macrumors.com/article-new/2021/02/apple-mixed-reality-headset-mockup-feature.jpg",
            "publishedAt": "2021-11-01T10:23:23Z",
            "content": "Apple plans to release its first mixed reality headset with Wi-Fi 6E support in 2022, Apple analyst Ming-Chi Kuo said today in a note sent out to investors.\r\nApple is rumored to be working on at leas… [+2537 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Sami Fathi",
            "title": "Apple's Privacy Features Have Cost Social Media Companies Nearly $10 Billion in Revenue",
            "description": "As a result of its privacy features, Apple has cost social media companies including Meta, formerly known as Facebook, Twitter, Snapchat, and YouTube, nearly $10 billion in revenue in the second half of 2021, according to an investigation by the Financial Tim…",
            "url": "https://www.macrumors.com/2021/11/01/apple-privacy-social-media-companies/",
            "urlToImage": "https://images.macrumors.com/t/Ikvjjs5jqE4W8L8tcx6gqKyAaYM=/2880x/https://images.macrumors.com/article-new/2021/06/craig-wwdc-2021-privacy.png",
            "publishedAt": "2021-11-01T11:42:13Z",
            "content": "As a result of its privacy features, Apple has cost social media companies including Meta, formerly known as Facebook, Twitter, Snapchat, and YouTube, nearly $10 billion in revenue in the second half… [+1957 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "jerb@insider.com (Jordan Parker Erb)",
            "title": "10 things in tech you need to know today",
            "description": "Microsoft passed Apple as the most valuable company, and Mailchimp employees are frustrated by their bonuses: 10 things in tech you need to know.",
            "url": "https://www.businessinsider.com/10-things-in-tech-you-need-to-know-today-1-2021-10",
            "urlToImage": "https://i.insider.com/617ef3fd23745d0018246101?width=1200&format=jpeg",
            "publishedAt": "2021-11-01T10:00:00Z",
            "content": "Happy Monday, readers. We've got lots on the docket today, starting with more Meta news, and wrapping up with a Google exec who's obsessed with collecting presidents' hair. \r\nLet's dive in. \r\nIf this… [+3088 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zacks.com"
            },
            "author": "Zacks Equity Research",
            "title": "Apple, Amazon, Alphabet, Meta Platforms and Microsoft are part of Zacks Earnings Preview",
            "description": "Apple, Amazon, Alphabet, Meta Platforms and Microsoft are part of Zacks Earnings Preview",
            "url": "http://www.zacks.com/stock/news/1820552/apple-amazon-alphabet-meta-platforms-and-microsoft-are-part-of-zacks-earnings-preview?cid=CS-ENTREPRENEUR-FT-press_releases-1820552",
            "urlToImage": "https://assets.entrepreneur.com/providers/zacks/hero-image-zacks-394545.jpeg",
            "publishedAt": "2021-11-01T11:28:00Z",
            "content": "For Immediate Release\r\nChicago, IL November 1, 2021 Zacks.com releases the list of companies likely to issue earnings surprises. This weeks list includes Apple Inc. AAPL, Amazon.com, Inc. AMZN, Alpha… [+6590 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hipertextual"
            },
            "author": "Rubén Chicharro",
            "title": "Diseño combinado con funcionalidad: el reflejo de los nuevos productos de Apple",
            "description": "Jony Ive, quien fue jefe de diseño en Apple hasta 2019, ayudó a establecer una icónica línea en el aspecto en productos como el iPhone, el Mac o incluso, el Apple Park, la futurista sede que la compañía tiene en Cupertino. Durante sus últimos años en la compa…",
            "url": "https://hipertextual.com/2021/11/diseno-combinado-con-funcionalidad-el-reflejo-de-los-nuevos-productos-de-apple",
            "urlToImage": "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/10/tim-cook-macbook-pro-02.jpg?fit=1500%2C817&ssl=1",
            "publishedAt": "2021-11-01T10:01:00Z",
            "content": "Jony Ive, quien fue jefe de diseño en Apple hasta 2019, ayudó a establecer una icónica línea en el aspecto en productos como el iPhone, el Mac o incluso, el Apple Park, la futurista sede que la compa… [+3359 chars]"
        },
        {
            "source": {
                "id": "the-next-web",
                "name": "The Next Web"
            },
            "author": "Ivan Mehta",
            "title": "DropBox users rejoice! An Apple M1 version is dropping next year",
            "description": "Given their performance and power, it’s natural to be lured by Apple’s new lineup of ARM-based MacBooks. I made the switch to the M1-powered Air earlier this year, so I wouldn’t be surprised if many of you might be eyeing the Pro with the M1X processor — desp…",
            "url": "https://thenextweb.com/news/dropbox-m1-version-is-dropping-next-year-analysis",
            "urlToImage": "https://img-cdn.tnwcdn.com/image/plugged?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F11%2Fdropbox-m1.jpg&signature=5b0ca2aad37d8c35c18eb31586703006",
            "publishedAt": "2021-11-01T12:00:53Z",
            "content": "Given their performance and power, its natural to be lured by Apples new lineup of ARM-based MacBooks. I made the switch to the M1-powered Air earlier this year, so I wouldnt be surprised if many of … [+2007 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "Carrie Honaker",
            "title": "10 Cookbooks That’ll Take The Stress Out Of Thanksgiving Dinner",
            "description": "No need to spend hours planning or cooking alone in the kitchen — get back to what’s important at the holidays.",
            "url": "https://www.huffpost.com/entry/thanksgiving-cookbooks_l_6176eaa1e4b066de4f660151",
            "urlToImage": "https://img.huffingtonpost.com/asset/61775ebd200000485e8d1123.png?ops=1778_1000",
            "publishedAt": "2021-11-01T09:45:07Z",
            "content": "Last year, with much of the U.S. in lockdown, my family was spread apart for Thanksgiving. Instead of making a 26-pound turkey, cornbread and crawfish stuffing and the requisite five pies, I went min… [+11491 chars]"
        },
    ]

    constructor() {
        super();
        console.log("YOYO")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=india&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=efa1dde58b0747d79aa92fe1ebfdf0c9";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }
    hahaboi = async () => {
        let url = `https://newsapi.org/v2/everything?q=india&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=efa1dde58b0747d79aa92fe1ebfdf0c9&page= ${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
        this.setState({ page: this.state.page - 1 })


    }
    heheboi = async () => {
        let url = `https://newsapi.org/v2/everything?q=india&from=2021-12-06&to=2021-12-06&sortBy=popularity&apiKey=efa1dde58b0747d79aa92fe1ebfdf0c9&page= ${this.state.page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
        this.setState({ page: this.state.page + 1 })
    }
    render() {
        return (
            <>
                <div className="container my-3">
                    <h2>goNews - Top Headlines </h2>

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4">
                                    <NewsItem key={element.url} title={element.title ? element.title.slice(0, 90) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>)
                        })}

                    </div>

                    <div className="container my-3 d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.hahaboi}> &larr; Previous</button>
                        <button type="button" className="btn btn-success" onClick={this.heheboi}>Next &rarr; </button>
                    </div>

                </div>


            </>
        )
    }
}

export default News
