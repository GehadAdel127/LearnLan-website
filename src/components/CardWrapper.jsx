// components/CardWrapper.jsx
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const CardWrapper = ({
    image,
    title,
    subtitle,
    description,
    price,
    rating,
    actions,
    children,
    sx = {},
}) => {
    return (
        <Card sx={{ width: "100%", borderRadius: "12px", boxShadow: 2, ...sx }}>
            {image && (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{ objectFit: "cover" }}
                />
            )}

            <CardContent>
                {title && (
                    <Typography variant="h6" sx={{ fontWeight: "600", mb: 1 }}>
                        {title}
                    </Typography>
                )}
                {subtitle && (
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                        {subtitle}
                    </Typography>
                )}
                {description && (
                    <Typography variant="body2" sx={{ color: "text.primary", mb: 2 }}>
                        {description}
                    </Typography>
                )}

                {price && (
                    <Typography variant="h6" sx={{ color: "primary.main", fontWeight: "600", mb: 1 }}>
                        ${price}
                    </Typography>
                )}

                {rating && (
                    <Typography variant="body2" sx={{ color: "gold", mb: 1 }}>
                        ⭐ {rating}
                    </Typography>
                )}

                {/* custom actions or children */}
                {children}
                {actions && <Box sx={{ mt: 2 }}>{actions}</Box>}
            </CardContent>
        </Card>
    );
};

export default CardWrapper;
