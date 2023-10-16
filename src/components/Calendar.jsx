import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PE from "./PE";
import Divider from "@mui/material/Divider";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Calendar = ({ eventsArray }) => {
  const [showEvents, setShowEvents] = useState(true);

  const [events] = useState([
    {
      // id: createEventId(),
      title: 'oopu',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpOzQngfIf_n6iFqscREDpdEyIyobvhN-Tg&usqp=CAU',
      start: '2023-10-05',
      end: '2023-10-06',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: 'blueGrey'
    },
    {
      // id: createEventId(),
      title: 'oopu',
      url: 'https://groupgordon.com/wp-content/uploads/2022/04/Messe_Luzern_Corporate_Event.jpg',
      start: '2023-10-05',
      end: '2023-10-06',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: 'blueGrey'
    },
    {
      // id: createEventId(),
      title: 'Poster',
      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgaGBkYGhwcGBgaGRgZHRgcGRoaGhgcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJCs0NjQ0NDQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQ4AugMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEAQAAEDAgMFBgQDBwIGAwAAAAEAAhEDIQQSMQVBUWFxBhMigZGhMrHR8EJSwQcUI2Jy4fEVojOCkrKzwhZDU//EABoBAAIDAQEAAAAAAAAAAAAAAAECAAMEBQb/xAAmEQACAgICAgEFAAMAAAAAAAAAAQIRAyESMUFRBAUTImFxgZGx/9oADAMBAAIRAxEAPwCoUwhPISQumeVQ2E8BKAm1Hhok7lCdjatYMElBcTjXPdvA4fVMxWJLzO4bv1S4alIM7/lKVuzdjwxxx5Pv/g3C7O710EAQJ9fsInQ7MsjxEk+jY8lb2NQAfHEH5T+i0rKTQqpaZ6D6fOOTDddNoHbL2BSES0egnyKLjZ9IaMb1gH5p7IH3+m9SOrAKttm8q/6eyCYA8kPr0QLQOaIVcShOJxV/v74Jo2FA6vRAm301uqrsOw628v03aKxWrA9FA57Yg+icjBuP2YCJ3/NZ6vTLTC2VSAOKAbUoC7vvzQaKckV2g32eqMNFrWmXCcw3ySSii89weLdTcHtPXgeRW52ZjW1mZm67xvBTRlejn5ItOy1C6E7KuhOVCAKQNXNClDUxCOEqkypIUIVC1JlU+RcKah5mxcO8tDgI8TcumniBkc7R5lDdqbS8TGhjIpnMbfH8Nn8R4fcq/iDlYXcB7rPObYk6lK0afj92yEV/4YpFjbPzh34vhy5TxGhvwtF5vYR4DQ0Nb8YdJHARlPJCXOgq5g66VG7MpONo0NGrmq58obmfOUaCbGPVaIYsh2YtaTAEEWtF4429ysiysdQjTKk3MeqWa6N30eVqcX7TLwxXgDIFnF07+Ecwo34oBrmwLkGd4idFXe6273VPEVY/ylo7lIvu2jDg8taYaBB0MNAnrb3QivjfA5mVnicDmjxNuLC9hY878JUT60/YVWo4nT5mPNGgUh2JxReQSAIa1tmxMCCTA1Jkk8+iWpjvCxoYz+G6Zgy+8w79VUcyLpuff+v1UoDG18WXuc51iTJAEAcIG4Kpt3Fh4JDGs8LWQ2QCB4QbkycoEnfE7ypK4cS3J4pPD6adVU21ZlMHeCekHpzUZXLplIY0AscKbJYwsO8P8LmhzhucM09QFa2Ztx9HugGsy03Em13y4uOc77WHRCyE1J0Z2kz1ujixVa57AIqN/wCm4NuBtHmU+lULHBwYww0NhzQQYIuQdSsh2F2lDjQcbO8TOu8LbvorRGpIxTTjKil3ngLMou7NO8WiOiY1qtPppkI0LZEWpkKw5iblRJZCGJ7WKVrFKxiFnmqAW3HwGMG8yegQfEP1VvbVWcTlmzQB56objn7kLN+GFUv8g+u+6fhnwq7ypcOJ3JDpyilAM0qxKL4bFGAD7A3QjDM+5srVR4bfle3kjLon02SjmcfaDArzxUVanmVbD1Abz9fZEqYMafOEh6BA92DdKhxGFhHnRFkNxmUjed32dyiZAJUZwj5/IJrKM28uF/v5q3Vp8THJS0aAbckRG4za+oRBRSr4N+R5k6N0s4gkkAGeTv7oIcBmEuMEW1Ji/PnK1dZ9LI2KgkEm+XM0nXUQOnPcs3TrS4xpJjpPKyHZRn0lQIr0HMNxbiolpqVIPkOAIgIHtDCGk+PwnQoONGeMr0R4TEGm9r26tcCvZcHVbUYx7dHNB9QvFAvSv2dYovovpn/63W6G/wBU0H4KfkRuPL0aGpTUBYiT2Ks5itTMiZWyJMisliTIiGyuxima1K1iky2VbZw4wMEHZ61R38x+iG450FEsECQ8x+M/MofjmSZKL6N2Fr7leqBrGyUSwVC/FDziGjS6ezapboEto3ZITkvxRogwDry+7qJ1eeEfLyQF21nFNZjSSo5JonxPjzx5VKQfGKymZ+fup2bW1+s+azjsTKY6slO3zNQzbAkAmxN+nFQYjb7GEhoDusx5D71WaqVja+iqPcg2K8j8Bqt2heT4YA6T533qodpPJJQ9qmaCdELE5SfkmdUc7X781NhcO+QASJ/m4/NJSwbpEmEZo7GfEgTw0TJFeSVaZFQYabhBzg6kAyPI/oiOMwIr0jGoFuqJbO8Le7e0Gw+IAm2lyr9LC5WyIjpFlYomVz2eUPYWktOoMLc/swd/Eqj+Rp90B7U4LJUzgWdr1R79lrf4tU8GN/7lWlUqLcjvG2ehvYoXMVxzVGWK1MwFVzE3u1c7tL3aNkB7WqQNSgJVUcxIwmDpwa7dzXkD3Wd2xVi28+wW0bQjE4lh/EA8dCPrKx23qQ7x3ID9bJ5dF/xa+/v0mBMqQtTwVepYEkSdPRV1Z2nkUewanMdCkrsANlCg9DxlassZ12dQhTU6ZOiBbsjcUwqZ9EgkEaKMsKDIxoKnoVmj4szuTSGiesE8Vc2Jgab3t794ZTnxEkA8et+PNTdoNmU2VCcNUFWk64gOzM4tdIvyIUCk6siwYc98MpPcWNzODHlxgEAuBm+osEdw/aBrRkZUc0gwWV2NgX0D2AEHqsvgwW1GuLA7K4HKTAJBtJ4StLVwX7y41cTWYHbmMAAHncn3PNPGynJTewlT2s18B7Mr+oLT0cjmEeS2DpCyVKgxlmAEHcZMea0FDHNytAieitTM04rwCu1mFz0id4MhTfsqia/GGf8Asr2KGdjmHePv9UO/ZgC2viWH8jT6PI/VJJflYbvG0ejroUZxDA7KXtzflzCfRSomYRclSKEKK5cuSnOA+0aWXEUqg0c11N3/AHN/VYjtRhSxznfng/Nej46jnZzaQ8dWmfcSPNY7tUIgxoSP1TdomKTjmTMQ1pBAAk8FdZUpgHvnveR8LGQGeb/oFUfUgH8zicx/l/KOu/yVvBbGdVY5zHNLgJAkXtMdUm/B2p8aubpexrK1N5yswwJ3fxDOg4xJ1VCplJsC3kbj1XNw7y7IGOLpiIMyijKTWUTTe1ge54fJeC8AAANDGyQNbkhBWx2443p3YMa1GdnUbZg0nnIDW2J1J1+d+CH0sMXPDGSd31W87N7OLTpN7GOQGv6KdG3EuS5GNxlIgzLfIz0kmxTDWBblI8wvSNvYN7mQ4uLeB3Hjx0t581hX7MLXE7jeOGullFsdxfgosY6IDnNG7KQ35aprsI4gkuJteTwC0eA2c17Y/wA+ag2rsc02F02MD1Mao0SUaVmeouhFsPioQnuyFbwzSojLJJhTOTeFbwzbjcrGzMGX7ldr7OLDYD6zorEiiUl0SUxmagNbClsvZULHkuY7K4tJE7yPJajA0rblj9qYhrMWWOdlbmBmJAMA3HBRiw22kUdpl2Hc0AHOfEXm7j0JXq/ZzGGthqVR3xObfqDE+y877cl7xRqODcpaQ1zfhcFvOxrIwVH+ifUlL5ZM24J+Q2uSLkTMUVy5clOcZrtJt59CoGMyiWZpcCQTJEdLKj2gpGpSY/8AO1pMcYumftHoENpVRoHFjvO4+RVrY1UVsE3izM3pBn9UyY848cayL2YzE4VrGzEkoW3XRaDaHBD2MHBBo6GHK+Fy2V6dN7t5jfeB5lXaVFrGF1i7QDmVIxrnQ24G/cI6JcUBHIaDgokCWRyddfws9mmDM4nWR7/3C9P7OtYRpcn5LzLYVIyTFiPkf7r0ns9lYJPToFXPo6+CXLFoI7VoWOYbuCwG1KQaSQPl9/4XpmJrMeyZFlgts4qlJYCCdPff97ksGXQetgTA1w10/eqs9osY17GMEal3oP7lVMXhABLXDj03x0Qpzi94BOggK0XNKo0OGGn79fvmFYoYXh98/b3UuGpmII+4M/TzKt023A3SNItw6b/RFIwOQX2I8N0BufS97k23Iy9mbX7KE4EBjrxxHlCKsqcPu/srEZpdj6VHKCvOe1+HhznxrWc2eQa23zXooqa/e9eW9oMQXucC6Ye+24HNqll0WYE+VljvHP2e4OJOSs0MHCRcAr1bY+H7uhSZ+VjQesXXmmxHtq0aGGA8TsU17v6QJPsF6wlQMz8ftnLly5EoKK5cuSnOBPajA99hqjAJcG52/wBTbx8x5rL9i8WPHhj+KmHjm4fEPQj0W+XmeJH7ptDN+EOkf0O/sT6IouxrlBwf9X9KW2TleQdxVGi+bIx2pw0VHRoTPUG6C0bFR9mzBTwoL0hA8uX2EyqB+I2EkxAsLmBuKTDvT6jMwI4gi33zRKOpbK9Hb7wWtAa1jZgAaWO/0RDDdpXwb8hy6LLVaZaS12oSNBGirbd7O1grHGo9dmk/118ObmMHWCRPXiguJxZzGDv15qJocdyu0tlPNyPZTsublLopNxTxqSi2CYc2YlVX4ItMuCKYQtm3XmjFFOS0qYaZSzNBGu9StoaOjQ6cLhSYNktEK2ynBj63VpjbJaFORpofs25qWnbfKkY2B5KEESmKyywmJWLwfZWpic9UQYe8QXQ5xBNhaPUrZOMQEzsY54pPBYQ3vHuDyR4iXX8OoiI8kskNGTim0Z/sJsp5rmo5uVlLM1vN5t6xK9FVfBYVtNgY3mSeJNyVYSlc5cpWIuSrlBSguXLkpzjlj+22zg97Hm3hcCR/L4h8z6LYId2gw5fh3gCXBpc3qNY8pRQYtp2tMxm0G95QpvnMQzKTxLbfRZl4grQ7DI7upRdrZ7fOx/RB8XThxRZs+PLjJw/1/GdQfuRfDD/CB0ZlFWYjKONuiiJni3pCbUwrXnNGgRbA9nWuawxIcA7ncT8kCxOKmyIO7QvFKnTpuyupiC602JAjyhLI3/T3KKcZeiTE4VjH5IvpESfQCUWpMaxsVC1hIsHnK70Onms67bmIfY138xZsjkQJ90OxFjLpJOhJJB5goHT5UaHaVJjhBcADFxeOHkqGK2M+kA8eNhuHNuD57kHbWImASDrqr2B22+lLQTkNy06TxHBFNGXK3KVoWhtJ9N0E2BuN/H0W22diW1G2vEHTWbiywT8UHkuAvIk/IlaTsy8Z4voZ3gGdbaX+SMXsz5I6s02IfZVaVRSYt+7oVVpgjX7/ALJyhLRdY/eiPZck4ZhIglz/APyOQTEVw1jjOgJ9uCNdkgf3SlN5Dj6vcf1UkCS/ELpUi5KVCrlyRQJRXLlyU5xy5cuUIZqv2VH7x3zH5QQQWZeIixnRZHG0znLTqCQV6msR2vwWSoKg+F4vydofqmTLITfNX6oybBdMq11aeyLoZX1QZ0saUnsR9YplN5GkyiWytnMqXe+L3CN7SxNOkxraIDZDmOIN4y2MjnPql4vsuhngsqxrt9v0ZTvjPNI1z3eEAngLlbenWwD2DO3xBxkxBLcro08r9FTqbRo02gU6YBa6SfzDKWwfOPdLRv4fsubF2IxlEOqtJe4AxF2ngRP9PqVHtPZDXDKxoAnW+lhclD6XaQxAZc8SY3bvJTsx73gl5PQaeSsVUYmpXYLxGAFMWMmIPCeCJ9nnnO0ubANgY8xHEXHJCcfXuGiZIk3TtlY3I5pk2Isfh11QTpjtNxPQ8QBB/wAoWakcJ6/d1aqYoObLbyJtw3R5fNZ/FYvLqYjX6lWNmaMWyztTHEMtBLpC32ysP3dGmyIysaD1gT7yvMNln94xVNhuM7eEBo8R+RC9bS3YMy40jki5KoUHLpXJFAlFcuXJTnHLly5Qhyo7YwIrUnM36t6j7hXlyhDzA4UjMwiCJCB4mmQ5embe2XJ71gv+Mcf5lkdo4IHxAJmrRpwfI4SqXkzzHkaGE586l0q1VwcaaKjWplpSM6WOcZSuI5tSFz65dbiogyVI1uUgn62Smxt0LQEEIi7EgNFuf6KtVrzZokACJjXySPfPxC/LTUe9imRW9kVR83+5SUtfX13Jrvr9+6dlgTfhpaLb/X0QGCo2u5rGsAFhrJvbhu+SG1cQ95kk8uHRQkyZ1RvY+zc0Pf8A8oPzKZWxHUVYZ7G4TJUY9wGYuAHIG0L0tYTAPhzI3EH0K3aaqMWV3KxEqRKoVCJUi5QJRXSmOeklKc2ySV0qOUoKJLHyulNSEqEsfKB7V2QCC9kRckcOJH0RYuVLaWMa1jgTq0j1CKK5NPs8+2kxzDI0QmvUD+RRHDbTH/DrXZudvb14hR4/Z+UZmEOabghR7Orhf22lPT8PwyhTMFR4qpLugXTuULjdVM6/K0SMenOfwURK4KCihOLvv38kjDJgCZ9fJE2bNc1oc/Xhw680UrA3RDgcLJzOHQLRYd8wAhlFhJhHcBRjVPFFU2XsGyFtsO+WNPFo+SxBqXgLSbK2mzK1j3ZXaCbB3IHinZlmm9hdKkXJSo5KuXKBA+ZKHKvmSh6lHG5k4KcCoQ5ODkKGUiWUhKZmTXPUC5EeJrBrSTuXnu3NqFzjey0vaTG5WEBeeYl8lFuka/g4Fklyl0hKhm6fhsW9nwm28HQ+SgBSEJLOzxi1TVokxNXO4uAid3NQpdy4JH2WpJRSQrWE6BEcDssvIDnQN8a8lWoFFMI+4TpIkm60HcBs6nTHhaJ46n13eSi2gzpCu4AAi6rbZc2ArPBnTfIq4VrZRJjuCBYeoZRjDukIIMkWaWqdjGBzCPNLTtdOabFMV+SHZvaatR8D/GwcT4gOTt/mtJge1WGfYuLDweIH/VosbjaUSUGqtSPQ324y/R7LTqNcJa4OHEEEeyevGsNjKlMyx7mHkSEU/wDlmK//AE/2t+iliv4/pmqD0oqKp3i4VFZR5ey+KiXvFRFRKaqlB5F3vFWr4mFUr4xDa+KlShkpSBvaHEyVlKhuvRdr9nhVpUn0Zc8taXt3+J5a1w5SIPC3FQ4zsthmmm4OLmMovqVXNPxljywhk6AuhoPmqZs7/wATjjgkYBq5a3DUcNiw+nTpd09rHvYQ9zg7I0uLXh28gGCIvuXYihhsIGMqUu9e9jXvJe5rWB4zNa0N1OUgknjpZCzXz3VbMiVwW+wvZvDOe57i4UX4fvaZ/Ewl4Z4o+LK7N1CoYbs0GCuKg8TDTyEHwlr3gZh+YFpt1SjLLEzFJE8NuS7XwTKeLfSZZjajmi8mA6BfetTX2RQw7qj3ML2ioadNmYiSBJLnawJHWeSdMkpql+wezFZW2Q3F1S4rXUtkNqVGNdh30g5r7EuhxDSRlzCRutJVGh2de1lV9Wm9oYwuaSCBmzNA9iUXIrjKKAFAQidCoIuUTD8N+7d7+7ic+SM7/wAszqs13l7KJhT5BgV5U5rQEJZWUgqp7A4k2JeIQqsNyu1HSqRMlKxo6IHNTYU9RqZlQLDV513eoa6soH4lW2eUjhbCr8WAonYm0obQxIkyA7qrNOuwzIYAI1Mz6qWXL4+6Ia+JVN9dEHFn8kWMxbf9PdRPcwGMlMzqYs0AE7unuErZshgSRFtLbz4Z3bnMLKXduIPxAlxOm4h0JuG7UhgpMLMzW030qjSYzte9zjB3ESIPEJmKpM1hjrtEAkRcTcHnKq1cLTYCSaZkiA6Rv0zGYABvxyyq5G/FGNU0XBtfDUGvOGY/O9pZmeWwxrhDsobqSJEmNTZd/rGGrsZ+8sfnptDMzC3xtbZocHaECBI3AWVTDCm6TFDXQeKBra3UeSnp06cnwUTBF8puLG0dSPJLRY0v2S1u07SagDMrDR7mm0GcjQ9rgSd5s4nm5PwHavLhnUHtzGW5HzdrQ/MWHiJ04SVSDGZoyUYnKDF5gHSONvPckOEpSSchkTq4AbtxFvLepQ3GPVBHau0cFVe+s1tYPc4vAJZlDiZvvhXD2kpVXVG1WO7t787YIzsdEWmxkajkFnGGm0kjuTAIjNmkyYcJJgwP93JWRWZrkocLOmIBMxl+7JkiOK/ZqGdpKbMjWNeWMzmXEZiXsy7rACBxQXBbZLBVDpd3jCwX0Jc0z7e6bhqbQ2DkdvkiJ5e/+1TOpMF8rHTuA053/VSheMV4IBtEHD9zBnvM87oyxCpFyIQ0PByMiDYmBqOA1t7lI17CXZhTFoFxxcJFtdPQIjJ10ikxymY9WGBnhE07b5HitHiVpzGDxBrTpYC2o3KEcik8qBguiGIfI+AN5gKpACJExjwoVM+oEmYIDCVayrd5Kie+UgdCazmxxqKCGGxWS0kDWwBv5qduKn4XPPGGMOqDOqKM1DxQHjjDneObr3mW+YZGD8P1hSPD5uHmQJnJrHDplWcdWd+Y+pTe+d+Y+pQLlA0DnvAzHPmOWYFMjOQ1o8rtHmm4ii5wkB5IzFp8EB0Fo6i5HmgBqE7z6lT4TEMBPeZj8OU3dEOEgtztkFsjUbkGPGNBJweKZcM7SWAyRTjS1tePPVczFeEf8YtJkQ2npEndrYGeSF43EsI/h5mnO42loyZWhoAzGDIcSOapMqERfTcSY0jRL0XRjZpHvLGknOLOiAyCT4jO8gpAyq74nPkyzSloQ60/0h3oqNDFsi7gJFwGuN4EiLDWRru3zZuJewiQ8yCIAa4WsOegnh9SCmE6NN2UXed4MU4gGN3SEuGqgtBippeGsINpMW4yeipHFU5+IeTHXF9xjjEef8qpVsQSYaQGiQIlsibWRQVFs0DKrz4WOeBlEBzGyb34cW+qsYfOYEuz5Wz8B3HT391mMNiYdLpNjaT8+seiOYSo3cDprmPlu6+qKFlGgg8RufJHBmg3201VItfmEFx/5W6yOP8AKHeykfIbJJQ1zyXWcR5osEYhjuzZsOv/AEab/ZWKji1vizbwJyx6DmAgbMSG7z6qtW2kNBfzQJwbCmNxZAIzyDrYBDKuLCGVsWSq+YqORbGKQROJ3lJ+9qhBSwhY1Isd4kNRROKRGzOoIkL03OmpFAqKHSulNCVQNDgU1yVIVCIaEwqRJCVlkRGIjhqGdUIRTY7/ABQihn0QV8KWnRVH2Wg2iLdRP2Vnqxuo9Ai7Q7DiXBH6NQNCC4AXlTV6xURJKy5icYXWCpveQog9NeVLIo0Me8qEqSLpzWIdjETWKZlJSMYFIwalFIFnNw8qT926KegYsrEH7JRByP/Z",
      start: '2023-09-10',
      end: '2023-0-014',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ff8b26'
    },
    {
      // id: createEventId(),
      title: 'Poster',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ-HiMNel632ByosDFjL1GoTvg4lEEmrNuw&usqp=CAU',
      start: '2023-10-19',
      end: '2023-10-25',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ff8b26'
    },
    {
      // id: createEventId(),
      title: 'Poster',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrezgexVz__u7RKtJQU4_iw2Jp5l9cunKVOD9L-d4FYF71OaP7KXOXDEYoeNk6CHMSQd4&usqp=CAU",
      start: '2023-10-02',
      end: '2023-10-01',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ff8b26'
    },
    {
      // id: createEventId(),
      title: 'Poster',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrezgexVz__u7RKtJQU4_iw2Jp5l9cunKVOD9L-d4FYF71OaP7KXOXDEYoeNk6CHMSQd4&usqp=CAU",
      start: '2023-10-02',
      end: '2023-10-01',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ff8b26'
    },
    {
      // id: createEventId(),
      title: 'Poster',
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrezgexVz__u7RKtJQU4_iw2Jp5l9cunKVOD9L-d4FYF71OaP7KXOXDEYoeNk6CHMSQd4&usqp=CAU",
      start: '2023-10-02',
      end: '2023-10-01',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ff8b26'
    },
    


  ]);

  const handleShowEvents = () => {
    // console.log("clicking")
    setShowEvents(false)
  }

  let eventStarts = events.map(el => el.start)
  let dateCount = {}
  let multEventDate = []
  eventStarts.forEach(el => {
    dateCount[el] ? dateCount[el]++ : dateCount[el] = 1
  })

  for (const key in dateCount) {
    if (dateCount[key] > 1) {
      multEventDate.push(key)
    }
  }

  const currentDate = new Date()

  const filteredEvents = events
    .map((event) => {
      // console.log('dateCount', dateCount)
      const eventDate = new Date(event.start)
      // console.log(eventDate);
      if ((eventDate >= currentDate)) {
        return { original: event.url, description: `${event.title} ${event.start}` };
      }
      return null; // This line can be omitted
    })
    .filter((event) => event !== null);

  // console.log('filteredEvents', filteredEvents)

  const renderItem = (item) => {
    return (
      <div style={{ objectFit: 'cover' }} className='image-gallery-image'>
        <img style={{ maxHeight: '55vh', width: '19rem' }} src={item.original} alt={item.description} />
        <div className='image-gallery-description' style={{ padding: '1vh', position: 'inherit', background: 'black' }}>{item.description}</div>
      </div>
    );
  }  

  const handleEventClick = (clickInfo) => {
    const eventDate = new Date(clickInfo.event.start).toDateString();
    if (eventDate >= currentDate) {
      const index = filteredEvents.findIndex(
        (event) => event.url === clickInfo.event.url
      );
      // console.log(index)
      if (index !== -1) {
        carouselRef.current.goToSlide(index);
      }
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [autoPlay, setAutoPlay] = useState(true);

  // $( "#calendar" ).fullCalendar(function() {  
  //   dayRender: function (date, cell) {
  //       if ( !dateHasEvent(date) )
  //           cell.css("background-color", "red");
  //       else if ( dateHasEvent(date) )
  //           cell.css("background-color", "yellow");
  //   }
  // });

  // Event Render Function To Get Images and Titles
  const renderEventContent = (eventInfo) => {
    const isMultEvent = multEventDate.includes(eventInfo.event.start.toISOString().substring(0,10));
    return (
      <div>
          <p>{eventInfo.event.title}</p>
          {/* <img className="eventimage" src={eventInfo.event.url} alt={eventInfo.event.title} /> */}
      </div>
    );
  };

  return (
    <div>
      <Divider textAlign="left" role="presentation" style={{ backgroundColor: '#ff8b25', height: '.2rem', alignItems: 'center', margin: '2rem 0' }}>
        <h1 style={{ display: 'inline', backgroundColor: 'white' }}>Events</h1>
      </Divider>
      {showEvents ?
        <div style={{
          display: 'flex', justifyContent: "space-between",
          padding: '0 4rem', alignItems: 'center', marginTop: '6vh'
        }}>
          <div className="demo-app-main" style={{ width: '50vw'}}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={2}
              // weekends={weekendsVisible}
              // select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              events={events}
              // contentHeight='auto'
              // aspectRatio={1.35}
            />
          </div>
          <div style={{ placeSelf: 'center' }}>
            <ImageGallery items={filteredEvents} renderItem={renderItem} showIndex={true} showBullets={true} autoPlay={true} slideInterval={5000} />
            {/* fllscrn and play and- marg-bot- 5vh svg l/r smething */}
            <button onClick={handleShowEvents}>Previous Events</button>
          </div>
        </div>
        : (<PE eventArr={eventsArray} setShowEvents={setShowEvents} />)}
    </div >

  );

};

// const CustomButtonGroup = ({
//   handleBackClick,
//   handleForwardClick,
//   handlePlayPauseClick,
//   autoPlay,
// }) => {
//   return (
//     <div className="carousel-button-group">
//       <button onClick={handleBackClick}>&lt;</button>
//       <button onClick={handleForwardClick}>&gt;</button>
//       <button onClick={handlePlayPauseClick}>
//         {autoPlay ? "Pause" : "Play"}
//       </button>
//     </div>
//   );
// };
 

{/* <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner"  */}

export default Calendar;
