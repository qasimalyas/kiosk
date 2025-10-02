"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ShoppingCart,
  Heart,
  Search,
  User,
  Star,
  Plus,
  Minus,
  CreditCard,
  Package,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function KioskStyleGuide() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-black text-foreground">
          Kiosk Style Guide
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive design system for touch-friendly retail kiosk
          interfaces
        </p>
      </div>

      {/* Color Palette */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-24 bg-primary rounded-lg shadow-lg"></div>
            <div className="text-center">
              <p className="font-bold text-foreground">Primary</p>
              <p className="text-sm text-muted-foreground">#15803d</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-accent rounded-lg shadow-lg"></div>
            <div className="text-center">
              <p className="font-bold text-foreground">Accent</p>
              <p className="text-sm text-muted-foreground">#84cc16</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-secondary rounded-lg shadow-lg border border-border"></div>
            <div className="text-center">
              <p className="font-bold text-foreground">Secondary</p>
              <p className="text-sm text-muted-foreground">#f0fdf4</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-muted rounded-lg shadow-lg border border-border"></div>
            <div className="text-center">
              <p className="font-bold text-foreground">Muted</p>
              <p className="text-sm text-muted-foreground">#f0fdf4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Typography</h2>
        <Card className="p-8">
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl font-black text-foreground">Heading 1</h1>
              <p className="text-muted-foreground">
                Font: Geist Sans Black, 60px
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-foreground">Heading 2</h2>
              <p className="text-muted-foreground">
                Font: Geist Sans Black, 36px
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Heading 3</h3>
              <p className="text-muted-foreground">
                Font: Geist Sans Bold, 24px
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-foreground leading-relaxed">
                Body text for kiosk interfaces should be highly readable and
                accessible. This text uses a comfortable line height and
                sufficient contrast.
              </p>
              <p className="text-muted-foreground">
                Font: Geist Sans Regular, 18px
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Small text for secondary information
              </p>
              <p className="text-muted-foreground">
                Font: Geist Sans Regular, 14px
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Buttons</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Primary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  Add to Cart
                </Button>
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  Buy Now
                </Button>
                <Button size="lg" disabled className="text-lg px-8 py-4 h-auto">
                  Out of Stock
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Secondary Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-transparent"
                >
                  View Details
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-transparent"
                >
                  <Heart className="mr-2 h-6 w-6" />
                  Add to Wishlist
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                >
                  Cancel
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Icon Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="h-16 w-16">
                  <Plus className="h-8 w-8" />
                </Button>
                <Button size="lg" className="h-16 w-16">
                  <Minus className="h-8 w-8" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 w-16 bg-transparent"
                >
                  <Search className="h-8 w-8" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 w-16 bg-transparent"
                >
                  <User className="h-8 w-8" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Package className="h-16 w-16 text-primary" />
            </div>
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Premium Headphones</CardTitle>
                <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                  New
                </Badge>
              </div>
              <CardDescription className="text-lg">
                High-quality wireless headphones with noise cancellation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">$299</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <Button className="w-full text-lg py-3 h-auto">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>

          {/* Category Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <CreditCard className="h-16 w-16 text-accent" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-center">
                  Electronics
                </CardTitle>
                <Badge variant="outline" className="text-sm px-3 py-1 border-2">
                  Popular
                </Badge>
              </div>
              <CardDescription className="text-center text-lg">
                Browse our latest tech products
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Info Card */}
          <Card className="bg-secondary border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Heart className="mr-2 h-6 w-6 text-primary" />
                Customer Favorites
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Wireless Earbuds</span>
                <Badge variant="secondary">Best Seller</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Smart Watch</span>
                <Badge variant="secondary">New</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Bluetooth Speaker</span>
                <Badge variant="secondary">Sale</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tags */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Tags</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Primary Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 h-auto">
                  Best Seller
                </Badge>
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2 h-auto">
                  New Arrival
                </Badge>
                <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2 h-auto">
                  Sale
                </Badge>
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 h-auto">
                  Featured
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Outline Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Popular
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-accent text-accent text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Trending
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-muted-foreground text-muted-foreground text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Limited
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Premium
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Secondary Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-lg px-4 py-2 h-auto"
                >
                  In Stock
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-lg px-4 py-2 h-auto"
                >
                  Free Shipping
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-lg px-4 py-2 h-auto"
                >
                  Warranty
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-lg px-4 py-2 h-auto"
                >
                  Eco-Friendly
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Small Tags</h3>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                  New
                </Badge>
                <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                  Hot
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 text-sm px-3 py-1 bg-transparent"
                >
                  Sale
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Gift
                </Badge>
                <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
                  50% Off
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Category Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Electronics
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Clothing
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Home & Garden
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Sports
                </Badge>
                <Badge
                  variant="outline"
                  className="border-2 border-primary text-primary text-lg px-4 py-2 h-auto bg-transparent"
                >
                  Books
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Status Tags
              </h3>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2 h-auto">
                  Available
                </Badge>
                <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2 h-auto">
                  Low Stock
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted text-muted-foreground text-lg px-4 py-2 h-auto"
                >
                  Out of Stock
                </Badge>
                <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2 h-auto">
                  Discontinued
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pagination */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Pagination</h2>
        <Card className="p-8">
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Standard Pagination
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 w-14 bg-transparent"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-transparent"
                >
                  1
                </Button>
                <Button size="lg" className="h-14 px-6">
                  2
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-transparent"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-transparent"
                >
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-transparent"
                >
                  10
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 w-14 bg-transparent"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Simple Navigation
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto bg-transparent"
                >
                  <ChevronLeft className="mr-2 h-6 w-6" />
                  Previous
                </Button>
                <span className="text-lg text-muted-foreground px-4">
                  Page 2 of 10
                </span>
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  Next
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Shopping Icons */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Shopping Icons</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Primary Icons (48px)
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Cart</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Wishlist</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <Search className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Search</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Account</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Reviews</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <Plus className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Add</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Payment</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                    <Package className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-center">Products</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Secondary Icons (32px)
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Cart</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Wishlist</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Search</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Account</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Reviews</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Add</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Payment</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="h-12 w-12 bg-secondary border border-border rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-center">Products</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Fields */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Form Fields</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            {/* Text Fields */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Text Fields
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 text-lg px-4 border-2 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="h-14 text-lg px-4 border-2 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-14 text-lg px-4 border-2 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="disabled"
                    className="text-lg font-semibold text-muted-foreground"
                  >
                    Disabled Field
                  </Label>
                  <Input
                    id="disabled"
                    type="text"
                    placeholder="This field is disabled"
                    disabled
                    className="h-14 text-lg px-4 border-2"
                  />
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Text Area</h3>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-lg font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message here..."
                  className="min-h-32 text-lg px-4 py-3 border-2 focus:border-primary resize-none"
                />
              </div>
            </div>

            {/* Radio Buttons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Radio Buttons
              </h3>
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Delivery Method</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="pickup"
                      name="delivery"
                      value="pickup"
                      className="h-6 w-6 text-primary border-2 border-border focus:ring-primary focus:ring-2"
                      defaultChecked
                    />
                    <Label htmlFor="pickup" className="text-lg cursor-pointer">
                      Store Pickup (Free)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="standard"
                      name="delivery"
                      value="standard"
                      className="h-6 w-6 text-primary border-2 border-border focus:ring-primary focus:ring-2"
                    />
                    <Label
                      htmlFor="standard"
                      className="text-lg cursor-pointer"
                    >
                      Standard Delivery ($5.99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="express"
                      name="delivery"
                      value="express"
                      className="h-6 w-6 text-primary border-2 border-border focus:ring-primary focus:ring-2"
                    />
                    <Label htmlFor="express" className="text-lg cursor-pointer">
                      Express Delivery ($12.99)
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Checkboxes</h3>
              <div className="space-y-4">
                <Label className="text-lg font-semibold">
                  Additional Services
                </Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="warranty"
                      className="h-6 w-6 text-primary border-2 border-border rounded focus:ring-primary focus:ring-2"
                      defaultChecked
                    />
                    <Label
                      htmlFor="warranty"
                      className="text-lg cursor-pointer"
                    >
                      Extended Warranty (+$49.99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="installation"
                      className="h-6 w-6 text-primary border-2 border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <Label
                      htmlFor="installation"
                      className="text-lg cursor-pointer"
                    >
                      Professional Installation (+$99.99)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="h-6 w-6 text-primary border-2 border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-lg cursor-pointer"
                    >
                      Subscribe to newsletter
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-6 w-6 text-primary border-2 border-border rounded focus:ring-primary focus:ring-2"
                      required
                    />
                    <Label htmlFor="terms" className="text-lg cursor-pointer">
                      I agree to the terms and conditions *
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Error States */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Error States
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="error-email"
                    className="text-lg font-semibold"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="error-email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 text-lg px-4 border-2 border-destructive focus:border-destructive"
                    defaultValue="invalid-email"
                  />
                  <div className="flex items-center space-x-2 text-destructive">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Please enter a valid email address
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="success-phone"
                    className="text-lg font-semibold"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="success-phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="h-14 text-lg px-4 border-2 border-primary focus:border-primary"
                    defaultValue="(555) 123-4567"
                  />
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Phone number verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Example */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Complete Form Example
              </h3>
              <Card className="p-6 bg-secondary/50">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">
                    Customer Information
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Please fill out your details to complete your order
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="form-name"
                        className="text-lg font-semibold"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="form-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="h-14 text-lg px-4 border-2 focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="form-email"
                        className="text-lg font-semibold"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="form-email"
                        type="email"
                        placeholder="Enter your email"
                        className="h-14 text-lg px-4 border-2 focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-lg font-semibold">
                      Preferred Contact Method
                    </Label>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="contact-email"
                          name="contact"
                          value="email"
                          className="h-6 w-6 text-primary border-2 border-border focus:ring-primary focus:ring-2"
                          defaultChecked
                        />
                        <Label
                          htmlFor="contact-email"
                          className="text-lg cursor-pointer"
                        >
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id="contact-phone"
                          name="contact"
                          value="phone"
                          className="h-6 w-6 text-primary border-2 border-border focus:ring-primary focus:ring-2"
                        />
                        <Label
                          htmlFor="contact-phone"
                          className="text-lg cursor-pointer"
                        >
                          Phone
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="form-terms"
                      className="h-6 w-6 text-primary border-2 border-border rounded focus:ring-primary focus:ring-2"
                      required
                    />
                    <Label
                      htmlFor="form-terms"
                      className="text-lg cursor-pointer"
                    >
                      I agree to the terms and conditions *
                    </Label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-4 h-auto bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button size="lg" className="text-lg px-8 py-4 h-auto">
                      Complete Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Payment Method Cards */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Payment Method Cards
        </h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                How would you like to pay?
              </h3>
              <p className="text-lg text-muted-foreground">
                Choose your preferred payment method to complete your order
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Card Payment Option */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <CreditCard className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Pay with Card
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Credit, debit, or contactless payment
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Fast & Secure</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Instant Processing</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Contactless Available</span>
                      </div>
                    </div>
                    <Button className="w-full text-lg py-4 h-auto group-hover:bg-primary/90 transition-colors duration-300">
                      <CreditCard className="mr-2 h-6 w-6" />
                      Select Card Payment
                    </Button>
                  </CardContent>
                </Card>

                {/* Pay at Counter Option */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <div className="h-32 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                    <User className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Pay at Counter
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Complete payment with our cashier
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Cash Accepted</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Personal Service</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Questions Welcome</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full text-lg py-4 h-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:border-accent/80 transition-all duration-300 bg-transparent"
                    >
                      <User className="mr-2 h-6 w-6" />
                      Pay at Counter
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Compact Version */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  Compact Version
                </h3>
                <p className="text-lg text-muted-foreground">
                  Space-efficient layout for smaller screens or secondary
                  placement
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <Card className="flex-1 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <CreditCard className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            Pay with Card
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Credit, debit, contactless
                          </p>
                          <Badge className="mt-2 bg-primary text-primary-foreground text-xs px-2 py-1">
                            Recommended
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="flex-1 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                          <User className="h-8 w-8 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            Pay at Counter
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Cash or card with cashier
                          </p>
                          <Badge
                            variant="outline"
                            className="mt-2 border-accent text-accent text-xs px-2 py-1 bg-transparent"
                          >
                            Personal Service
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Mobile-First Version */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  Mobile-First Version
                </h3>
                <p className="text-lg text-muted-foreground">
                  Optimized for touch interaction on smaller screens
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                  <Button
                    className="w-full h-20 text-lg justify-start space-x-4 hover:shadow-lg transition-all duration-300 group"
                    size="lg"
                  >
                    <div className="h-12 w-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Pay with Card</div>
                      <div className="text-sm opacity-90">
                        Credit, debit, or contactless
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-20 text-lg justify-start space-x-4 hover:shadow-lg transition-all duration-300 border-2 bg-transparent"
                    size="lg"
                  >
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <User className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground">
                        Pay at Counter
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Complete payment with cashier
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Usage Guidelines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                Touch Targets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground">
                • Minimum 48px × 48px for all interactive elements
              </p>
              <p className="text-foreground">
                • 8px spacing between touch targets
              </p>
              <p className="text-foreground">
                • Large buttons for primary actions
              </p>
              <p className="text-foreground">
                • Clear visual feedback on interaction
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl text-accent">
                Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-foreground">
                • High contrast ratios (4.5:1 minimum)
              </p>
              <p className="text-foreground">• Large, readable typography</p>
              <p className="text-foreground">• Clear visual hierarchy</p>
              <p className="text-foreground">
                • Consistent interaction patterns
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
