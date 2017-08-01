# MCG BACKEND DOCUMENTATION

|Req. Type| Endpoint        | Info                        | Login needed?   |
|--------:| ----------------|:---------------------------:| :-------------: |
|GET      | /api/news       | MCG RSS Feed as mini-JSON   | false           |



## Endpoints
### GET /api/news
Returns a JSON Object with all the News from our school. The News source currently is [this RSS Feed](http://www.mcg.gehrden.de/portal/rss.xml). Maybe we switch someday to [mcg-news.com](http://www.mcg.news.com) when its done!

To save Bandwith the JSON is "minimized" which means that the Key Values are shortened which saves around 1700 Characters per Load. Take a look at this table:

|Short Key  |Long Key         |Info                                 |Data Type        |
| :-------: | :-------------: |:-----------------------------------:|:---------------:|
|de         | Description     | RSS Feeds Description               | String          |
|ti         | Title           | RSS Feeds Title                     | String          |
|u          | URL             | RSS Feeds URL                       | String          |
|i          | Items           | All the Items (Posts) in this feed  | Array           |
|t          | Title           | Item's title                        | String          |
|d          | Description     | Item's description                  | String          |
|l          | Link            | Link to original Post               | String          |
|c          | Created At      | Date/Time when posted               | Timestamp in ms |
