
export async function getUser() {
           const response = await fetch(
             "http://localhost:1337/api/contacts/1?populate=*"
  );
  const user = await response.json();
  const { FirstName, LastName } = user.data.attributes;
  const { attributes } = user.data;
    return {
      id: user.data.id,
      firstname: FirstName,
      username: `${FirstName} ${LastName}`,
      online:attributes.IsOnline,
      avatar: `http://localhost:1337${attributes.ProfileIcon.data.attributes.formats.large.url}`,
      field: "Senior Ui/Ux designer",
    };
  }
 
                



 
