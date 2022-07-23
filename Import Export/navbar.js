let header=()=>{
    return `<div id="container">
    <div>Marketplace</div>
    <div>Help & FAQs</div>
    <div>
      <img
        class="circle_img"
        src="data:image/png;base64,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"
        alt=""
      />
    </div>
  </div>`
}

// import in header tag

let navbar =()=>{
    return `<a href="./index.html"
    ><img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEUAAAD09PT5+fn39/f8/Pyzs7Pz8/P///8oKCji4uLv7+/a2trl5eWurq7r6+vT09N+fn43NzekpKSFhYXV1dXCwsJsbGy4uLicnJyLi4uYmJhXV1ewsLAwMDDKyspGRkZhYWF0dHSQkJBHR0dQUFAjIyMVFRU2NjYSEhJlZWVbW1scHBwUFBRvb28rKys/Pz/hUlyAAAAOe0lEQVR4nO1daXeyPBOWJEJZREQRt+LaVuvd+v//3UvABchMFu2H57wn10fFYTKZTGZL7PUsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCws/u/wsT8lSbI9/L5M6etw2ibjJJkuv14jdF5zQtvT+uM1Oh+X75LOONlu1ufXKJXYLHI/cEgNGoT98ftTdL6SlBOitCTDKlpOPBns9k+QWs9XYUmpJkRp4OeLzRNkNrvBMHZrhjhHJaUom22fFf5oMWEVP84dJWkvHhxaj/2+tSBO0GVROB5pE+K0KGEeGS4uBiydk4yTarFE+WjDdK1P5bjtR8wTGCpHxxiL+1MDhmp8zCeMdIjdSfq7t/uDMetg26JzmfkInRs1L5xrTuc0K5UJJePPtMR+3GZUyhFhbv6tL6hyiIOAyUbIgsGofvLgdd+VN+hsMiLj60bNvVGT4LzzMUndyNBso6LyO4vkVCpKhE22Kko3vA9cJUHmppU+HFjnC9K/0zkUREnn+iM3ldvXz0Usm70bGTI5SckspDrQAGWhnNKDos4QKYvHcmGljqaoqp9FMlORRLqDJAVuvL79LrNSSvmnUlSHUHeIlBVfuLBGoQFnFbUBxtKo0BRV9X6aImRm1GDyOKVoqZDVQm1jGuTc5IQI6+Aa0KnBhjBLc9NB+qClzxh1zRiiNJGJ6jzs2msFGOsyUAtraaALj5/6kOHKjElRNhfJFGaKXhPydrisDrHZHEKohLV+QlT8t6EgrbX/DEte3qWTPyGrEpDYa/x0vbRnwIX1z3+SECk6LJ20NhsRbPjWojM3XDEPQsi+M35drZxaWH2UEi1Res6oLFnbOm+dZ6eP+E3XbYQzxLnhPKGUwIh49yey4sJaIm8ufeOwyPI8K8LAQ9gjmwZLiclu0yUUNaRVwGOjjEXDkqOsGPpYcECgbedv9KoSFsgaJW7/dF8bH8syDIIkQf2GXr3EEvHvOvENGizqDeeXmy91/EqQaIONBVm9xliTx9UFFAJJuz7eCfQR2X0DWqpsskLtyF3uBSgEv+tGvQ3A+Qu6slrisqryKUEcBy7PiSj4Lx8fpMBDNIayMTNIHDfeJHaG51VKlqLYqbM9GCvXFfQO2UjQB75Aey+btR/6CDAzQ+Js/n3V59Fpl8UqD5GsQoCWC0fKU2gU9W59jBCWyvUcptur33k+jPMIZekqkDnwPUHiBcCE0PjYemSCGDcn+zl2qJ36gXR50FD0k10PC+KB1U+j6psMs8m+kAH7zjGW6vcCq5CGCEO9ofjettWagV4IJdkBIveeqpMSHfgQnQrimnU9/lZIGzjfPhiBvGNBu8vT17H4OUFTMG+B+HDT+9uD88JiNElxycz8YbJAhXUU/Ve+Qi6gXSh3iX8YS3A4w8e5BkLCGM8ojEVCbkOXISPjeFl3ATYxN/KAvA1OKRFUgq9DwHS4DollGcwFPOXj3hRY6ugqLBGJRB7qPIfe4mGJjis2JiuRSRK+R5E38juFWCL+G06mB+8WpXXuJSIx2g2rmtgJzz+yv2dI4xm+cK4QElkSMFk1YSCInSRQbElk2lBhCb47BdaVVFhHwYI/PGXILcITcQ+Asw8Di0YrABtiLMrKJfgmcccGcKhoLM6GfBkCZunm+bwBnAnBP4hUW1qYU1Phy2WMcX+XkVt9EsjS0UCnxCsaQMTPD2Tlz9S7cnRnybu6BeIKLSdDrzoLbgwQqBAxNLFZzGZpjUGJ1WAILcIfLZZy3QqJJKvXO+9mTY5W/f7iiI5Yumqao9Q28t2IQQ5AWETI5iHQzGbTWL5ZIAMWFUtvEXIgXjYAYlDmHQHLW7psmgC2Ppgh7UE2AOitp93O8K3vP1DtqmVvBgQcCkemAd0k7RPS+hTNu7bG99CYEgLLdXsugAhaW7H0VcshgWlTw1KMCmUeZBeAPwsF0jVzbqo15Is4AY0qtxJHYHdH4A31qs43iE4WRap38MBEwRBwM6vAnGyqVi8ghG7lmlUA3CoMlIULg+4bcWBAFlUCcS8lA8AZuX/J4mysaMoSd41r0kYTygRrW1x0kp40d0bg90Y9eaJmktVZTHK05OX62fgbj9JFk2WyCkszbFiHo4TEw3Sr7uMZiWGQySqEXOZyZCrXnvImwmGagMZxBKxs/Z2UQ9+haXJUTuFO3pa1FQNs/U2aYw+qgc7cconF2Vyw+ScgLjRpDoSzKHoMESdMcZsvujS63vsNwpLjwjrolrbLqCsatIssYo6AxmYsAX42RQqH4oPEI8UY3oVWojE12B04hGxUZWAMCmsle1HaUJ0X9+cSIzHnRNZAah2GW1pVUmyBTKqwvGlk2K476TJWW2OjWjItubvHyWJIQVZmLEGZ6u3RwH/m9dc4Fdb+UHhKmWHrQBD3deuamnV0lB7PNXUrLhhJBh8G4M+Me8eMOQb9WZS5/c4GKSwiOjFkbIB1/l2Gpp1/k2ozElTVIWjbDwLReawyMjvTprggbTk4QpHI1D6I/vLDKZrLC4wic9V6A9RC2n8HQPQd6hTRpfDMXDDmN/dGQS+NY3GJsHrnlBiKK9oDbodBwkIurNI4+Gbios10hyis7A+FVdraWaDb3V0zR7aiZv2hsEo3bqjRmd/85cMuCcvwTzWrwjYLTNgjgAP/+jIkjUztZebLeteEn0a35L9o4E1tluCpiYHcR5JF9JmG3Cvwvk4EgIFvb6jLNHSZLkf0Ji2BrPFuiLkObRy/d4UvPzKD429chw4u29UkYJwjpT9BwiM8VOrLivYAEKcUwOc+GQxjZi4xaSENwNEXSYBm72uzyHzHU6rYNXcshjuBOlXRAhzuoDivk9XEwRpKEV4N7ei72DXDwHag+unNLIu9cgpxDXPrXgcgkFYdwehA3E/Vyafj94yfZNSWllHuD+xiZIpjOF/jHG0JdnjdkxdSxRSNWaK0d3g6U5dkrq5+GZQrKsqicyct8l5R7pKlmwPrV9XOACT/zBwtMPmnieM41BMXMasriF34unv8MkcjWr4jCh9SX31wrAGgBcYkBzzVOoJmmJAENkNtAthRy6qrCChY4LZQjzGjhHlvp5HENEuFAOeGmEEMsJ9AIVrVdAQUHEw26r1I1lBYvW+sUboB1+SUPlBcUtn3NsAzUd4IKrIaJXEXrxVEKxzUumXkloo5HtMkHVTx4Emef2L9lhmEYkALjmleE2nTbI9Wo5HtBqBsaBwCiJ2bDuWOqZjFNShpCsdY+c9D3mSVprPZYrGbz8eJugKCHQ94wMDoAGpBcs5QemVonCg9EagLlc8XcAZIP3AFz8RQ8gC/58FTairQNiPMgC5La7B1t8UQU2oD0AvvOPwLIdnmOq6mPQR6piFOlV05P+oUofYEoo0WDXjKooxo92phAZuHZgYQqKJAUGuFTneCphef6JxYVVtlaMnwzz+AFh29eRSjcBhUtfEDVVEBetH0l1b9Rq3rkH5WX0AWg27UjGlNIoeyoVSr/0yr+U/3TgolHUxY0KEB6ir9ePh0KAiV5wZ14otQn2MAj9BCqRfVynmH2njrr8BGCpVuGRwZaBxOhaHZI6TS0E+oUkmjExCtK7IQP8JtFc5dG8F+dnlpU9KwBkHa8C85RdsGy2VpXPgGCJJALqYippMdUISP0HkZ2hA3Mj1CJ90QdTtcHJeFeGpyDkZNfF+ADhJIW74gC/OI4uDDmSSegzP5MTO+mULmjEDHMGkIXwZA6QB2IZZIs4BbPn6CSLkbnCMoomgkReEWE8r8ncDbPo3lagU2SbICcwS30OPlPCL9eywYiJ7IFLuoqz72C9lE6qLOVgHULh3vYUnekDwJJW4xfzB3Ps1C1aVYpA+bwAg+fLMD+954bhQz+8QJZ5uHyr9vVzFW9b4fKAffAd+P9QW6H60SIW5ky4DKDYv+apUNY6pRWyYD4Hwffx10a9oBzLTVUesIrx+UwomGWb+fZ5NAwtP9sg+4NZ44M/FA1wxWhrbTL+3Vq2NjvQ2erDCdoF4wmDbYu+xCpE2jZk0aBVE1T48TipjXS1gxb/SsfZ5yCj/ZzcQgx92NUZqbH4QU70BkpUrkJTJeD8YWWqgxgWpGooe9RQ/7lQyV64YzlBfodTRAisjoTjYJj335qb+rSkgvv7yFD9BZS20+oobOAEdcBI4kTcNMDEz/5pojLizTvv02vEdckzx9o1fnLjt1NlYCGgP+yis3MD24rG5mM7/x7w7W9MmmTxJiYSdo6L8iLfAwweaFMd5Qu7oGYXYHHZXfR1iVWAZPdIKfufPvyhGSGH83ucnT4csdawzZPNmQJQzzaD5K6kEJiielRdkGllWPl5gNBkn8dyGuvAVRT122SAmQWZgbGi7sftGnViKJZAe/TpEuTcpjd/wG3DfD3u6KM3AWL0aXuuIZhbnJlbwVqLIKqnmJEfP5yGR3K+/MAm7iplgKJoHvvINGN5T0TF2GRsaBEo0Lli+5ur2eBHVGTyas3ijX7lXmVwLKbqzZ6dyuTFmouP5BW+rcXw31ys37lau44nx2TXaJV5y3FHefSwnd6BHmzxQth/8S7IL6O5HGCSAUx3Go00ZHGS30z8e9zSdIOFKOLJw/QrxuiS3YtAn97hRdfpR4cf+k08p6GMSYvEqm4lSzfWSTu9I+zZIWGe4M20V/dwXlzZa0QYYwz9dl6kFonrkev9alzVP19xGeWywM6C3TsPuHCte/ZTBq7zwNKjKlyGiHI+Yxf/XkP1msx4Mirv6og1LqxkWaPPknIh/TRX9SUaJVHEadICpWu+kTt5wsd1eeONwgzBdmnYFXHOZp5vO//Lhx5MZ+lo6N2tMgfH7tD4f1M7e3dHH8vRyWy+X+8jKx89f68AdkeufRvuJo9PpfyVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFj8d/A/YRvSCxc/SQMAAAAASUVORK5CYII="
      alt=""
  /></a>
  <div id="nav_women">  <a href="women.html" style="color: white;text-decoration:none">  WOMEN</a></div>
  <div id="nav_men"><a href="./gaurav/product_page.html" style="color: white;text-decoration:none">MEN</a></div>
  <div id="search_box">
    <input
      type="text"
      id="search"
      placeholder="Search for items and brands"
    />

    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div id="first">
    <ul>
      <li id="A">
        <i class="fa-regular fa-user"></i>

        <div class="dropdown2">
          <ul>
            <li>
              <div>
                <a href="signin.html" style="color: rgb(40, 38, 38)"> Sign In</a> |
                <a href="join.html" style="color: rgb(40, 38, 38)"> Join</a>
              </div>
              <i class="fa-solid fa-xmark" id="cancel"></i>
            </li>
            <li>
              <i class="fa-regular fa-user"></i><a href="#"> My Account</a>
            </li>
            <li>
              <i class="fa-solid fa-box"></i><a href="#"> My Orders</a>
            </li>
            <li>
              <i class="fa-solid fa-circle-question"></i
              ><a href="#"> Returns Information</a>
            </li>

            <li>
              <i class="fa-brands fa-rocketchat"></i>
              <a href="#">Contact Preferences</a>
            </li>
          </ul>
        </div>
      </li>
      <li><i class="fa-regular fa-heart"></i></li>
      <li><i class="fa-solid fa-suitcase-medical"></i></li>
    </ul>
  </div>`
}

// import in navbar id div

let section =()=>{
    return `<div id="women"> <a href="women.html" style="color: rgb(40, 38, 38);text-decoration:none">  WOMEN</a></div>
    <div id="strong">
      <strong>
        +50% OFF 1000s OF SUMMER SALE STYLES!* <br />
        ALREADY UP TO 80% OFF <br />
        With code: HUGE50
      </strong>
      <div class="dropdown1">
        <p>
          *Enter code HUGE50 at checkout to save an extra 50% off selected
          marked-down prices of styles included in the ASOS sale. Ends 8am
          BST/UTC+1/09:00 UTC+2 on 21 July 2022. Code can be used multiple
          times per customer up to a maximum pre-discount spend of £500/€690
          per order. Cant be used with other promo codes or on gift vouchers,
          delivery charges, Premier Delivery or ASOS Marketplace. Country
          exclusions apply. Selected marked products excluded from promo.
        </p>
      </div>
    </div>
    <div id="men"> <a href="./gaurav/product_page.html" style="color: black;text-decoration:none">MEN</a></div>`
}
// import in section id div
let footer=()=>{
    return `<div>
    <h3>Help & Information</h3>
    <p>Help</p>
    <p>Track order</p>
    <p>Delivery & returns</p>
  </div>
  <div>
    <h3>About ASOS</h3>
    <p>About us</p>
    <p>Careers at ASOS</p>
    <p>Corporate responsibility</p>
    <p>Investors' site</p>
  </div>
  <div>
    <h3>More From ASOS</h3>
    <p>Mobile and ASOS apps</p>
    <p>ASOS Marketplace</p>
    <p>Gift vouchers</p>
    <p>Black Friday</p>
    <p>ASOS x Thrift+</p>
  </div>
  <div>
    <h3>Shopping from:</h3>
    <label for=""
      >Your are in
      <img
        class="circle_img"
        src="data:image/png;base64,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"
        alt=""
      />
    </label>
    <h3 style="display: inline; cursor: pointer">| CHANGE</h3>
  </div>`
}

// import in footer tag

let last=()=>{
    return `<p>© 2022 ASOS</p>
    <p>
      <a
        href="https://www.asos.com/privacy-policy/"
        style="color: black; text-decoration: none"
      >
        Privacy & Cookies</a
      >
      |
      <a
        href="https://www.asos.com/terms-and-conditions/"
        style="color: black; text-decoration: none"
      >
        Ts&Cs
      </a>
      |
      <a
        href="https://www.asos.com/accessibility/"
        style="color: black; text-decoration: none"
      >
        Accessibility
      </a>
    </p>`
}

// import in last id in div
export {header, navbar, section, footer, last}