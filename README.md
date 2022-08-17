## How long did you spend on the coding test?

About 24 hours
## What would you add to your solution if you had more time? If you did not spend much time on the coding test.
- Add pagination.
- Add a filter component in the sidebar, so user can easily toggle market news entity rather than searching.

## What was the most useful feature that was added to the latest version of your chosen language?
> Error: .cause
```
    This can be used to include more intrinsic information to Error when errors.
```
example:
```
const getNews = async () => {
    try {
      const response = await marketaux.get("/news/all");
      setNews(response.data.data);
    } catch (error: any) {
      throw new Error("Something when wrong, please try again later", {
        cause: error,
      });
    }
  };
```

```
try{
  const users = await getNews();
} catch(error) {
  console.log(error.cause);
}

```


## How would you track down a performance issue in production? Have you ever had to do this?

To track down performance issue in production, at first we have to ensure that logs, metrics and tests are in place to accurately measure the performance of the software as it grows.
The log gives details about events that was accessed in the application.
The Metrics helps with the collection of data in time series which can help visualize the performance.

No, I haven't done this.

## How would you improve marketaux that you just used?

- Improve the using of API KEY in the request header instead of passing it as a params to the URL.
- Increae the limit for free plan, free plan should be able to search for market news with any entity.

## On a scale of 1-10 what would you rate yourself?

```Answer
    8/10
```

# NOTE
The Marketaux free plan is limited to 3 items per request and each request has empty entity and similariies which unfortunately can't implement the filter by countries and industries as these are both located inside the entity array.
