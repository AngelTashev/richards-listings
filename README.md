# `Richard's Listings Documentation`

This project uses ReactJS for front-end and Firebase for back-end.
Other API's used: Cloudinary (Cloud storage), Google Maps, Tockify calendar.

## `Routes`

The routes of the application:

### `/ (home page)`

If you are not authenticated, you can come to the anonymous home page and login or register.

If you are authenticated, you will be welcomed by the All Listings page.

### `/login`

This page allows you to log into your profile.

### `/register`

You can create your new profile from here, entering all of the needed data.

### `/logout`

This is the path for logging out of your account.

### `/user`

This is the user space.

From here you can view the total count of your listings and likes on all of your listings.
You can change your profile picture from this page.

### `/user/:userId/listings`

You can see all of the user's listings by their id.

If you happen to be the user with the given id, you can edit or delete your listings.

### `/add-listing`

From here you can create a listing, by giving it an eye-catching title and description.

Choose the photo of the listing carefuly! It is very imporant! (Although you are not obliged to upload a photo :) )

### `/listings/id`

You can view your own, or someone else's listings on this path, given you have the right id.

From here you can also like their listings! :)

### `/listings/id/edit`

If you do not like the look, picture or price of your listing, here you can change that.

### `/listings/id/delete`

Be careful with this one! 

When going to this path, you are going to receive a message, that prompts you if you would like to delete your listing.

### `/about-us`

You can find information about our office, phone or email.

There is an integrated map from Google Maps, showing the exact location of our office.

Also, we organise events! View them in the calendar, provided by Tockify, that is on this page.

### `/error`

OOPS! Something very bad happened. This page usualy displays, when an error happens. It can be user or server error.

## `Technologies used`

### `ReactJS`
### `Firebase Cloud Storage`
### `Clodinary Cloud Storage`
### `Google Maps API`
### `Tockify Calendar API`