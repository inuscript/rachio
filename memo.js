, function(t, e) {
  t.exports = `ig_me() {
  feed {
    media.%(media_pagination)s {
      nodes {
        id,
        caption,
        code,
        comments.%(comments_pagination)s {
          count,
          nodes {
            id,
            created_at,
            text,
            user {
              id,
              profile_pic_url,
              username
            }
          },
          page_info
        },
        date,
        display_src,
        is_video,
        likes {
          count,
          nodes {
            user {
              id,
              profile_pic_url,
              username
            }
          },
          viewer_has_liked
        },
        location {
          id,
          has_public_page,
          name
        },
        owner {
          id,
          blocked_by_viewer,
          followed_by_viewer,
          full_name,
          has_blocked_viewer,
          is_private,
          profile_pic_url,
          requested_by_viewer,
          username
        },
        secure_video_url,
        usertags {
          nodes {
            position,
            user {
              username
            }
          }
        },
        video_url
      },
      page_info
    }
  },
  id,
  profile_pic_url,
  username
}
`
}
, function(t, e) {
  t.exports = `ig_shortcode(%(shortcode)s) {
  comments.%(pagination)s {
    count,
    nodes {
      id,
      created_at,
      text,
      user {
        id,
        profile_pic_url,
        username
      }
    },
    page_info
  }
}
`
}
, function(t, e) {
  t.exports = `media.%(pagination)s {
  count,
  nodes {
    caption,
    code,
    comments {
      count
    },
    date,
    display_src,
    id,
    is_video,
    likes {
      count
    },
    owner {
      id
    }
  },
  page_info
}
`
}
function s(t) {
  var e = p(t);
  o(tt[t], e, function(e, n) {
    var i = $(Z, {
      pagination: "after(" + e + ", " + n + ")"
    });
    return "ig_hashtag(" + t + ") { " + i + " }"
  }
  , function(e) {
    return R.loadPosts(t, e.media)
  }
  , "tags::show")
}
function a(t) {
  var e = h(t);
  o(ot[t], e, function(e, n) {
    var i = $(Z, {
      pagination: "after(" + e + ", " + n + ")"
    });
    return "ig_user(" + t + ") { " + i + " }"
  }
  , function(e) {
    return L.loadPosts(t, e.media)
  }
  , "users::show")
}
function u(t) {
  var e = f(t);
  o(nt[t], e, function(e, n) {
    var i = $(Z, {
      pagination: "after(" + e + ", " + n + ")"
    });
    return "ig_location(" + t + ") { " + i + " }"
  }
  , function(e) {
    return k.loadPosts(t, e.media)
  }
  , "locations::show")
}