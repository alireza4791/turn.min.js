$("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});

$("#flipbook").bind("turning", function (event, page, view) {
    event.preventDefault();
});