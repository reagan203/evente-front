// ... (imports)
import React, { useState } from 'react';
import {
  Grid,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

export const Home = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addEvent = (event) => {
    setSelectedEvents((prevSelectedEvents) => [...prevSelectedEvents, event]);
  };

  const clearSelectedEvents = () => {
    setSelectedEvents([]);
  };

  const totalPrice = selectedEvents.reduce((total, event) => {
    return total + parseFloat(event['ticket-price'].replace('ksh', ''));
  }, 0);

  const handleCheckout = () => {
    // Open the modal when Checkout is clicked
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const eventData = [
    {
      "id":1,
      "image":"https://vipi.live/wp-content/uploads/2023/03/277454213_487258436433867_6114500236092752777_n.jpg",
      "name":"WAKADINALI",
      "description":"Wakadinali is a Kenyan hip hop group consisting of two members: Scar Mkadinali and Domani Mkadinali. They are known for their energetic and socially conscious rap music. The group has gained popularity in the Kenyan music scene for their unique style and powerful lyrics.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"06/01/2024",
      "ticket-price":"ksh1000"
  },
  {
      "id":2,
      "image":"https://www.iconradio.co.ke/wp-content/uploads/2021/12/00471607_4b3c73f8babcf80a930565efd00c906c_arc614x376_w1200.jpg",
      "name":"SAUTI SOL",
      "description":"Sauti Sol is a Kenyan afro-pop band formed in Nairobi, Kenya. The group consists of four members: Bien-Aimé Baraza, Willis Chimano, Savara Mudigi, and Polycarp Otieno. Sauti Sol's music is a fusion of various styles, including afro-pop, afro-fusion, and contemporary R&B",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"09/01/2024",
      "ticket-price":"ksh10000"
  },
  {
      "id":3,
      "image":"https://variety.com/wp-content/uploads/2021/01/WrestleMania_37_Tampa_Bay_2021_on_black4.jpg",
      "name":"WRESTLEMANIA",
      "description":"WrestleMania is an annual professional wrestling event produced by World Wrestling Entertainment (WWE). It is considered WWE's flagship event and is often described as The Grandest Stage of Them All or The Showcase of the Immortals.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"09/02/2024",
      "ticket-price":"ksh5000"
  },
  {
      "id":4,
      "image":"https://image.discovery.indazn.com/ca/v2/ca/image?id=1ttsejjvxm3q18xqzytiqbijd_image-header_pRow_1688484175000&quality=70",
      "name":"EL-CLASSICO",
      "description":"The football matches between two of the most storied and successful football clubs in Spain",
      "location":"Nairobi",
      "time":"2100-2230hrs",
      "day":"07/03/2024",
      "ticket-price":"ksh6000"
  },
  {
      "id":5,
      "image":"https://i1.sndcdn.com/avatars-bzbEfyMhYPwwqqm9-tEdCQA-t500x500.jpg",
      "name":"WANAVOKALI",
      "description":"Wanavokali, which means Those with Vocals in Swahili, is a group of six Kenyan performers: Chep, Lenah, Mellah, Riki, Sam, and Ythera, who all have a love for expressing themselves via song, fashion, and art.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"11/03/2024",
      "ticket-price":"ksh5500"
  },
  {
      "id":6,
      "image":"https://www.digitaltrends.com/wp-content/uploads/2020/03/ufc-2020-hub-featured-1.jpg?p=1",
      "name":"UFC",
      "description":"he UFC (Ultimate Fighting Championship) is a well-known mixed martial arts (MMA) promotion company. It is the largest MMA promotion in the world and features the highest-level fighters in the sport. The UFC organizes events globally and has gained widespread popularity for its intense and competitive fights.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"16/01/2024",
      "ticket-price":"ksh10000"
  },
  {
      "id":7,
      "image":"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220920104707_F1_2023_calendar.jpg&w=700&q=90&c=1",
      "name":"FORMULAR-1",
      "description":"Formula 1, often abbreviated as F1, features high-performance, single-seater race cars competing in a series of races known as Grands Prix. The championship is governed by the Fédération Internationale de l'Automobile (FIA). Formula 1 is known for its cutting-edge technology, skilled drivers, and global appeal.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"05/05/2024",
      "ticket-price":"ksh100000"
  },
  {
      "id":8,
      "image":"https://www.motorsportmagazine.com/wp-content/uploads/2023/03/MotoGP-race-start-800x450.jpg",
      "name":"MOTOR-GP",
      "description":" MotoGP is a premier class motorcycle racing event that features a series of races held on road racing tracks around the world. It is the top division of the FIM Road Racing World Championship Grand Prix",
      "location":"Nairobi",
      "time":"2100-2230hrs",
      "day":"17/05/2024",
      "ticket-price":"ksh5000"
  },
  {
      "id":9,
      "image":"https://waza.co.ke/storage/uploads/2023/08/Untitled-1-1692960532.jpg",
      "name":"KALIGRAPH JONES",
      "description":" He gained recognition in the Kenyan music scene with his unique style and lyrical prowess. Kaligraph is known for his versatility in adopting different rap styles and flows.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"05/01/2024",
      "ticket-price":"ksh100"
  },
  {
      "id":10,
      "image":"https://lh3.googleusercontent.com/oCuOuEfPXa9eH-_J3ntRsdUWF7dcing8NdwkF-pwmNTkwpQxx4FYFua1bT-q8jqPSHvb7nEjnfvh6cJBfXjdV3iRsUyqLsYXJsDKby7wpA=s750",
      "name":"NYASHINSKI",
      "description":" Nyashinski's solo music is known for its diverse style, blending various genres such as hip hop, Afrobeat, and R&B.",
      "location":"Nairobi",
      "time":"2100-3000hr",
      "day":"15/05/2024",
      "ticket-price":"ksh1000"
  },
  {
      "id":11,
      "image":"https://i0.wp.com/kelxfy.com/wp-content/uploads/2021/07/Buruklyn-Boyz.jpg",
      "name":"BRUKLYN BOYS",
      "description":"The group has two main faces, Ajay who is the C.E.O and also a rapper, and Mr. Right.",
      "location":"Nairobi",
      "time":"2100-2230hrs",
      "day":"20/01/2024",
      "ticket-price":"ksh100000"
  },
  {
      "id":12,
      "image":"https://library.sportingnews.com/styles/crop_style_16_9_desktop_webp/s3/2021-11/manchester-united-manchester-city-logos-2021_cb9ysazga15o1wlnpngm7azaa.jpg.webp",
      "name":"MANCHESTER DERBY",
      "description":"A football (soccer) match between two major football clubs based in Manchester, England: Manchester United and Manchester City.",
      "location":"Manchester",
      "time":"2100-2230hrs",
      "day":"29/01/2024",
      "ticket-price":"ksh100000"
  }


  ];

  return (
    <Box p="6">
      <Heading as="h1" textAlign="left" mb="6" fontSize="3xl" color="teal.500">
        Upcoming Events
      </Heading>
      {selectedEvents.length > 0 && (
        <Box mb="4" p="4" borderWidth="1px" borderRadius="lg" boxShadow="md" bgColor="teal.50">
          <Heading as="h2" fontSize="xl" fontWeight="semibold" mb="2" color="teal.700">
            Selected Events
          </Heading>
          {selectedEvents.map((selectedEvent) => (
            <Text key={selectedEvent.id} fontSize="md" color="teal.700">
              {selectedEvent.name}
            </Text>
          ))}
          <Text fontWeight="bold" mt="2" fontSize="lg" color="teal.700">
            Total Price: ksh{totalPrice}
          </Text>
          <Button colorScheme="blue" mt="2" onClick={clearSelectedEvents}>
            Clear Selection
          </Button>
          <Button colorScheme="green" mt="2" ml="2" onClick={handleCheckout}>
            Checkout
          </Button>
        </Box>
      )}
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {eventData.map((event) => (
          <Box key={event.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="4">
            <Image src={event.image} alt={event.name} w="100%" h="200px" objectFit="cover" mb="4" borderRadius="md" />
            <Heading as="h2" fontSize="lg" fontWeight="semibold" mb="2">
              {event.name}
            </Heading>
            <Text color="gray.600" mb="2">
              {event.description}
            </Text>
            <Text>
              <strong>Date:</strong> {event.day}, {event.time}
            </Text>
            <Text>
              <strong>Location:</strong> {event.location}
            </Text>
            <Text>
              <strong>Ticket Price:</strong> {event['ticket-price']}
            </Text>
            <Button colorScheme="teal" mt="4" onClick={() => addEvent(event)}>
              Buy
            </Button>
          </Box>
        ))}
      </Grid>

      {/* Checkout Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout Message</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Proceed to the registration page to complete your purchase.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
