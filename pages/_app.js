import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}


//       res.status(200).json({ reservationNumber });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong." });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
