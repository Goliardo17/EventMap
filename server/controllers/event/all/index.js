const { services } = require("../../../services");

const eventServices = services.event;
const categoryServices = services.category;
const userServices = services.user;

const eventByCategoryId = (arr) => {
  const eventsByCategories = [];

  arr.forEach((id) => {
    const filter = {
      categoryId: id,
    };

    const eventId = eventServices.categories.get(filter, ["eventId"]);

    eventsByCategories.push(...eventId);
  });

  return eventsByCategories.filter(
    (id, index) => eventsByCategories.indexOf(id) === index
  );
};

const subscribersByEventId = (arr, page) => {
  const eventSubscribers = arr.map((eventId) => {
    const filter = { eventId };

    const subscribers = eventServices.subscribers.get(filter).length;

    return { id: eventId, subscribers };
  });

  eventSubscribers.sort((a, b) => a.subscribers > b.subscribers);

  const first = (page - 1) * 10;
  const last = first + 10;

  return eventSubscribers.slice(first, last);
};

const infoByEventId = (arr) => {
  return arr.map((event) => {
    const filter = {
      id: event.id,
    };

    const info = eventServices.info.get(filter)[0];

    return { ...event, ...info };
  });
};

const userByEventId = (arr) => {
  return arr.map((event) => {
    const filter = {
      id: event.userId,
    };

    const user = userServices.info.get(filter, ["name", "sureName"])[0];

    return { ...event, user };
  });
};

const categoriesByEventId = (arr) => {
  const eventsCategories = [];

  arr.forEach((event) => {
    const filter = {
      eventId: event.id,
    };

    const categoriesId = eventServices.categories.get(filter, ["categoryId"]);

    eventsCategories.push(...categoriesId);
  });

  const categories = eventsCategories.filter(
    (item, ix) => eventsCategories.indexOf(item) === ix
  );

  return categories.map((categoryId) => {
    const filter = {
      categoryId,
    };

    return categoryServices.info.get(filter)[0];
  });
};

const all = (req, res) => {
  const filter = req.query;

  const eventsByCategories = eventByCategoryId(filter.categories);
  const eventsOnPage = subscribersByEventId(eventsByCategories);
  const eventsInfo = infoByEventId(eventsOnPage);
  const events = userByEventId(eventsInfo);
  const categories = categoriesByEventId(events);

  const response = { events, categories };

  res.status(200).json(response);
};

module.exports = { all };
