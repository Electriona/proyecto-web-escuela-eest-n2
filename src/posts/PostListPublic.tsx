import {
    useGetList,
    NumberField,
    ReferenceArrayField,
} from 'react-admin';
import { Box, Grid, Avatar, Paper} from '@mui/material';
import CSS from 'csstype';

function PostListPublic() {
    const CustomPostListStyles: CSS.Properties = {
        flexGrow: 1,
        margin: "auto 10em",
    }
    const { data, isLoading, error } = useGetList(
        'posts',
        { pagination: { page: 1, perPage: 100 } },
    );
    if (error) { return <p>ERROR</p>; }
    return (
        <Box sx={CustomPostListStyles}>
            <Paper elevation={5}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={8} md={8} style={{textAlign: 'center', margin:'auto'}}>
                        <h1>Escuela Tecnica N°2 "Ing Emilio Rebuelto"</h1>
                    </Grid>
                    <Grid item xs={4} sm={8} md={4}>
                        <Avatar src='LogoOficialEscuela.png' sx={{height: 200, width: 200}} style={{margin:'auto'}}/>
                    </Grid>
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={8} md={12} style={{textAlign: 'center', margin:'auto'}}>
                        <p>
                            La finalidad de este blog es facilitar información importante a alumnos,docentes y comunidad educativa en general. Así mismo a través de esta vía podrán realizar la inscripción a mesas de exámenes previos, obtener los programas de las materias, entre otros. Estamos abiertos al aporte de todos para mejorar constantemente este medio de comunicación entre la escuela y todos ustedes. Se les recuerda controlar las modificaciones del blog, con respecto a las mesas de examenes.
                         </p>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
            {data?.map((post, _) => (
                <Grid item key={post.id} xs={4} sm={4} md={4}>
                    <h3>{post.title}</h3>
                    <div>{post.teaser}</div>
                    <div>{post.published_at}</div>
                    <NumberField source="views" />
                    <ReferenceArrayField
                        label="Tags"
                        reference="tags"
                        source="tags"
                        sortBy="tags.name"
                        sort={{ field: 'name.en', order: 'ASC' }}
                    />
                </Grid>
            ))}
            </Grid>
        </Box>
    );
}

export default PostListPublic;