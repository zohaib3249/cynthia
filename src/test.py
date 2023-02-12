import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import plotly.express as px
from shapely.geometry import LineString
import geopandas as gpd

data = pd.read_csv(r"C:\Users\dell\Downloads\Compressed\upwork\output.csv")

# Convert the start and end coordinates to LineString objects
lines = [LineString([(row['startStopLongitude'], row['startStopLatitude']),
                     (row['endStopLongitude'], row['endStopLatitude'])]) for idx, row in data.iterrows()]

# Create a GeoDataFrame from the data with the LineString objects as geometry
gdf = gpd.GeoDataFrame(data, geometry=lines)

# Create a subplot with a scatter mapbox for the choropleth and lines
fig = make_subplots(rows=1, cols=1, specs=[[{'type': 'scattermapbox'}]])

# Add the choropleth to the subplot
fig.add_trace(
    go.Scattermapbox(
        lat=gdf['startStopLatitude'],
        lon=gdf['startStopLongitude'],
        mode='markers',
        marker=dict(
            size=8,
            color=gdf['hour'],
            colorscale='Plasma',
            opacity=0.7
        ),
        text=gdf['hour'],
        name='',
        showlegend=False
    )
)

# Add the lines to the subplot
for i in range(len(gdf)):
    fig.add_trace(
        go.Scattermapbox(
            lat=[gdf.iloc[i]['startStopLatitude'], gdf.iloc[i]['endStopLatitude']],
            lon=[gdf.iloc[i]['startStopLongitude'], gdf.iloc[i]['endStopLongitude']],
            mode='lines',
            line=dict(
                width=2
                
            ),
            opacity=0.7,
            showlegend=False
        )
    )

# Configure the mapbox layout
fig.update_layout(
    mapbox=dict(
        style='open-street-map',
        center=dict(
            lat=gdf['startStopLatitude'].mean(),
            lon=gdf['startStopLongitude'].mean()
        ),
        zoom=4
    )
)

# Add a dropdown button for the date
dates = gdf['batch_date'].unique()
buttons = [dict(method='update',
                label=str(date),
                args=[{'visible': [date == d for d in gdf['batch_date']]}]) for date in dates]
fig.update_layout(
    updatemenus=[dict(type='dropdown',
                      active=0,
                      buttons=buttons,
                      x=0.1,
                      y=1.15)
                 ])

# Show the figure
fig.show()
