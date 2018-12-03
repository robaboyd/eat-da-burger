$(document).ready(() => {
  $('.devour').on('submit', (event) => {
    event.preventDefault();
    const burger_id = $(this).children('.burger_id').val();
    console.log(burger_id);
    $.ajax({
      method: 'PUT',
      url: `/${burger_id}`,
    }).then((data) => {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});
