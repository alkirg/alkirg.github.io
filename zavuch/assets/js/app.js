$(document).ready(function () {
  $('.faq__question').click(function () {
    $this = $(this);
    $this.parent().toggleClass('faq__slide--active');
    $this.next().toggle(200);
  });
  $('.jury').slick({
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLmZhcV9fcXVlc3Rpb24nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJHRoaXMgPSAkKHRoaXMpO1xuICAgICR0aGlzLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdmYXFfX3NsaWRlLS1hY3RpdmUnKTtcbiAgICAkdGhpcy5uZXh0KCkudG9nZ2xlKDIwMCk7XG4gIH0pO1xuICAkKCcuanVyeScpLnNsaWNrKHtcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSk7XG59KTsiXX0=
