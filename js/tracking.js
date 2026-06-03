window.dataLayer = window.dataLayer || [];

function likeArticle() {
  alert("Thanks for liking ♡");

  window.dataLayer.push({
    event: "article_like",
    article_id: window.location.pathname.replace(".html", ""),
    article_title: document.title,
    page_path: window.location.pathname
  });
}

function initArticleTracking() {
  const likeBtn = document.getElementById("btn-like");

  if (likeBtn) {
    likeBtn.addEventListener("click", likeArticle);
  }

  const shareX = document.getElementById("share-x");
  const shareLinkedin = document.getElementById("share-linkedin");
  const shareThreads = document.getElementById("share-threads");

  if (shareX) {
    shareX.addEventListener("click", () => {
      window.dataLayer.push({
        event: "social_share",
        network: "x",
        page_path: window.location.pathname
      });
    });
  }

  if (shareLinkedin) {
    shareLinkedin.addEventListener("click", () => {
      window.dataLayer.push({
        event: "social_share",
        network: "linkedin",
        page_path: window.location.pathname
      });
    });
  }

  if (shareThreads) {
    shareThreads.addEventListener("click", () => {
      window.dataLayer.push({
        event: "social_share",
        network: "threads",
        page_path: window.location.pathname
      });
    });
  }
}
