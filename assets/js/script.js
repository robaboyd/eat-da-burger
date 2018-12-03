$(document).ready(() => {
  $('.devour').on('submit', (event) => {
    event.preventDefault();
    const burger_id = $(this).children('.burger_id').val();
    $.ajax({
      method: 'PUT',
      url: `/burgers/${burger_id}`,
    }).then((data) => {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});
