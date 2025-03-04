import React from "react";

const Pagecount = () => {
  return (
    <div>
      <div class="join flex justify-center mb-10">
        <input
          class="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked="checked"
        />
        <input
          class="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          class="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          class="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </div>
  );
};

export default Pagecount;
