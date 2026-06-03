window.dataLayer = window.dataLayer || [];

// LIKE EVENT
function likeArticle() {
  alert("Thanks for liking ♡");

  dataLayer.push({
    event: "article_like",
    article_id: window.location.pathname.replace(".html", ""),
    article_title: document.title,
    page_path: window.location.pathname
  });
}

// INIT ALL TRACKING
function initArticleTracking() {
  const likeBtn = document.getElementById("btn-like");
  const shareX = document.getElementById("share-x");
  const shareLinkedin = document.getElementById("share-linkedin");
  const shareThreads = document.getElementById("share-threads");

  if (likeBtn) {
    likeBtn.addEventListener("click", likeArticle);
  }

  if (shareX) {
    shareX.addEventListener("click", () => {
      dataLayer.push({
        event: "social_share",
        network: "x",
        page_path: window.location.pathname
      });
    });
  }

  if (shareLinkedin) {
    shareLinkedin.addEventListener("click", () => {
      dataLayer.push({
        event: "social_share",
        network: "linkedin",
        page_path: window.location.pathname
      });
    });
  }

  if (shareThreads) {
    shareThreads.addEventListener("click", () => {
      dataLayer.push({
        event: "social_share",
        network: "threads",
        page_path: window.location.pathname
      });
    });
  }
}
