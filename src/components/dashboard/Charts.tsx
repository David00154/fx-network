import {
  Grid,
  Flex,
  Text,
  Spacer,
  Image,
  Box,
  Button,
  Portal,
} from "@chakra-ui/react";
import { Card, CardBody, CardHeader } from "./Card/Card";
//
export default function Charts() {
  return (
    <Box my="26px" width="100%">
      <Card minHeight="290.5px" width="100%" mb="24px">
        <CardBody w="100%">
          <div
            style={{
              width: "100%",
              height: "calc(610px - 32px)",
              background: "transparent",
              padding: "0 !important",
            }}
          >
            <iframe
              id="tradingview_4b404"
              src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_4b404&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=1&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=light&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=phoenixcryptotrade.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD"
              style={{
                width: "100%",
                height: "100%",
                margin: "0 !important",
                padding: "0 !important",
              }}
              frameBorder="0"
              allowTransparency={true}
              scrolling="no"
            ></iframe>
          </div>
        </CardBody>
      </Card>
      <Card maxHeight="290.5px" mb="24px">
        <CardBody
          p="0px"
          // backgroundImage={peopleImage}
          // bgPosition="center"
          // bgRepeat="no-repeat"
          w="100%"
          // h={{ sm: "200px", lg: "100%" }}
          // bgSize="cover"
          // position="relative"
          borderRadius="15px"
        >
          <div
            style={{
              width: "100%",
              height: "calc(610px - 32px)",
              background: "transparent",
              padding: "0 !important",
            }}
          >
            <iframe
              allowTransparency={true}
              frameBorder="0"
              src="https://s.tradingview.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A540%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22anyoption.online%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
              style={{
                boxSizing: "border-box",
                height: "540px",
                width: "100%",
              }}
            ></iframe>
          </div>
        </CardBody>
      </Card>
    </Box>
  );
}
