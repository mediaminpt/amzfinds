const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@type": "Product",
                "name": "Sony Cyber-shot DSC-W290",
                "image": "https://m.media-amazon.com/images/I/71q9XFobG9L._AC_SL1200_.jpg",
                "description": "Sony Cyber-shot DSC-W290 Digital Camera",
                "brand": {
                    "@type": "Brand",
                    "name": "Sony"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://amzn.to/4qyuZmB"
                }
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@type": "Product",
                "name": "SteelSeries Arctis Nova Pro",
                "image": "https://m.media-amazon.com/images/I/61Eqdt502lL._AC_SL1500_.jpg",
                "description": "SteelSeries Arctis Nova Pro Gaming Headset",
                "brand": {
                    "@type": "Brand",
                    "name": "SteelSeries"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://amzn.to/49APVCH"
                }
            }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@type": "Product",
                "name": "TAGRY Earbuds",
                "image": "https://m.media-amazon.com/images/I/61uEvVoizoL._AC_SL1500_.jpg",
                "description": "TAGRY Bluetooth Wireless Earbuds",
                "brand": {
                    "@type": "Brand",
                    "name": "TAGRY"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://amzn.to/45vGcMp"
                }
            }
        },
        {
            "@type": "ListItem",
            "position": 4,
            "item": {
                "@type": "Product",
                "name": "MiniToo Retro PC",
                "image": "https://m.media-amazon.com/images/I/717Wh8lpS2L._AC_SL1500_.jpg",
                "description": "MiniToo Retro PC Monitor",
                "brand": {
                    "@type": "Brand",
                    "name": "MiniToo"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://amzn.to/4sn853m"
                }
            }
        },
        {
            "@type": "ListItem",
            "position": 5,
            "item": {
                "@type": "Product",
                "name": "LOFREE Mechanical Keyboard",
                "image": "https://m.media-amazon.com/images/I/61GhAz-OQqL._AC_SL1500_.jpg",
                "description": "LOFREE Mechanical Keyboard",
                "brand": {
                    "@type": "Brand",
                    "name": "LOFREE"
                },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock",
                    "url": "https://amzn.to/3YQ1jFy"
                }
            }
        }
    ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);
