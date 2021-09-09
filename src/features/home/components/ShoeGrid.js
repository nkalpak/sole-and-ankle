import { Box, Flex, Image, Text } from "theme-ui";
import SHOES from "../../../data";
import { VerticalSpacer } from "../../../components/Spacer/VerticalSpacer";
import { formatPrice, isNewShoe } from "../../../utils";

function ShoeCardBanner({ color = "primary", children }) {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        borderRadius: "2px",
        backgroundColor: color,
        position: "absolute",
        top: "12px",
        right: "-6px",
        color: "white",
        fontWeight: "heading",
      }}
    >
      {children}
    </Box>
  );
}

export function ShoeGrid() {
  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        flex: 1,
        gap: 8,
      }}
    >
      {SHOES.map((shoe) => (
        <Box sx={{ flex: "1 1 340px", position: "relative" }}>
          {isNewShoe(shoe.releaseDate) && (
            <ShoeCardBanner color="secondary">
              <Text>Just Released!</Text>
            </ShoeCardBanner>
          )}

          {shoe.salePrice && (
            <ShoeCardBanner color="primary">
              <Text>Sale</Text>
            </ShoeCardBanner>
          )}

          <Image
            src={shoe.imageSrc}
            sx={{
              width: "100%",
              borderRadius: "16px 16px 4px 4px",
            }}
          />

          <VerticalSpacer size={12} />

          <Flex>
            <Text>{shoe.name}</Text>
            <Text
              sx={{
                ml: "auto",
                ...(shoe.salePrice && {
                  textDecoration: "line-through",
                }),
              }}
            >
              {formatPrice(shoe.price)}
            </Text>
          </Flex>

          <VerticalSpacer size={6} />

          <Flex>
            <Text sx={{ color: "gray.700", fontWeight: "medium" }}>
              {shoe.numOfColors} Color{shoe.numOfColors > 1 && 's'}
            </Text>

            {shoe.salePrice && (
              <Text sx={{ color: "primary", ml: "auto" }}>
                {formatPrice(shoe.salePrice)}
              </Text>
            )}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
