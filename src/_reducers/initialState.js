export const initialUser = {
  user: {
    uid: null,
    roles: [],
    name: null,
  },
  csrf_token: null,
  logout_token: null,
  login_status: null,
  isAuthenticated: false,
};

export const initialTaxonomy = {
  vocabularies: [{ vid: 1000, name: "dummy" }],
  terms: [],
  currentVocabulary: null,
  currentTerm: null,
  postsByTerm: [],
};

export const initialAlerts = {
  alert: { id: null, text: "alert", style: "style" },
};

const currentArticle = {
  nid: 0,
  uuid: null,
  vid: null,
  langcode: "en",
  type: { target_id: "article", target_type: "node_type", target_uuid: null },
  revision_timestamp: null,
  revision_uid: {
    target_id: null,
    target_type: "user",
    target_uuid: null,
    url: null,
  },
  revision_log: null,
  status: true,
  uid: {},
  title: null,
  created: null,
  changed: null,
  path: { alias: null, pid: null, langcode: "en" },
  body: "<p>",
  field_image: {
    target_id: 0,
    alt: "image alt",
    title: "image title",
    width: 709,
    height: 998,
    target_type: "file",
    target_uuid: null,
    url: null,
  },
  field_tags: {
    target_id: 1,
    target_type: "taxonomy_term",
    target_uuid: "df2a055d-3cec-4b57-9c10-7ae340c8a2f9",
    url: "/taxonomy/term/1",
  },
};

export const initialPosts = {
  data: [],
  status: null,
  isLoading: false,
  response: null,
  currentArticle: currentArticle,
  currentArticleJSON: {},
  currentArticleHAL_JSON: {},
};

export const initialMedia = {
  images: [],
  videos: [],
};
