jQuery(document).ready(function () {
  const advice = () => {
    axios.get("https://api.adviceslip.com/advice").then(function (response) {
      const adviceId = response.data.slip.id;
      const adviceContent = response.data.slip.advice;
      jQuery("#adviceNum").text(adviceId);
      jQuery("#adviceContent").text(adviceContent);
    });
  };

  advice();

  jQuery("#toggler").click(function () {
    advice();
  });
});
