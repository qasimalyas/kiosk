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
  ShoppingBag,
  Utensils,
  Monitor,
  Cherry,
  Beef,
  Milk,
  Trash2,
  X,
  Delete,
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
                <span className="text-3xl font-bold text-primary">£299</span>
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
                      Standard Delivery (£5.99)
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
                      Express Delivery (£12.99)
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
                      Extended Warranty (+£49.99)
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
                      Professional Installation (+£99.99)
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

      {/* Order Method Cards */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Order Method Cards
        </h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                How would you like to order?
              </h3>
              <p className="text-lg text-muted-foreground">
                Choose your preferred ordering method to get started
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Takeaway Option */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <ShoppingBag className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Takeaway
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Order to go and take with you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Quick & Convenient</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Perfect for Busy Days</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Eco-Friendly Packaging</span>
                      </div>
                    </div>
                    <Button className="w-full text-lg py-4 h-auto group-hover:bg-primary/90 transition-colors duration-300">
                      <ShoppingBag className="mr-2 h-6 w-6" />
                      Order Takeaway
                    </Button>
                  </CardContent>
                </Card>

                {/* Eat In Option */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <div className="h-32 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-300">
                    <Utensils className="h-16 w-16 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Eat In
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Dine in our comfortable restaurant
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Full Service Experience</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Fresh & Hot Food</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Comfortable Seating</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full text-lg py-4 h-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground group-hover:border-accent/80 transition-all duration-300 bg-transparent"
                    >
                      <Utensils className="mr-2 h-6 w-6" />
                      Dine In
                    </Button>
                  </CardContent>
                </Card>

                {/* Online Collection Option */}
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                    <Monitor className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Online Collection
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      Order online and collect when ready
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Skip the Queue</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Order at Your Pace</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Real-time Updates</span>
                      </div>
                    </div>
                    <Button className="w-full text-lg py-4 h-auto group-hover:bg-primary/90 transition-colors duration-300">
                      <Monitor className="mr-2 h-6 w-6" />
                      Order Online
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <ShoppingBag className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            Takeaway
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Order to go
                          </p>
                          <Badge className="mt-2 bg-primary text-primary-foreground text-xs px-2 py-1">
                            Popular
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                          <Utensils className="h-8 w-8 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            Eat In
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Dine with us
                          </p>
                          <Badge
                            variant="outline"
                            className="mt-2 border-accent text-accent text-xs px-2 py-1 bg-transparent"
                          >
                            Full Service
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                          <Monitor className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground">
                            Online Collection
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Order ahead
                          </p>
                          <Badge
                            variant="outline"
                            className="mt-2 border-primary text-primary text-xs px-2 py-1 bg-transparent"
                          >
                            Skip Queue
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
                      <ShoppingBag className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Takeaway</div>
                      <div className="text-sm opacity-90">
                        Order to go and take with you
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-20 text-lg justify-start space-x-4 hover:shadow-lg transition-all duration-300 border-2 bg-transparent"
                    size="lg"
                  >
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Utensils className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-foreground">Eat In</div>
                      <div className="text-sm text-muted-foreground">
                        Dine in our comfortable restaurant
                      </div>
                    </div>
                  </Button>

                  <Button
                    className="w-full h-20 text-lg justify-start space-x-4 hover:shadow-lg transition-all duration-300 group"
                    size="lg"
                  >
                    <div className="h-12 w-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                      <Monitor className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold">Online Collection</div>
                      <div className="text-sm opacity-90">
                        Order online and collect when ready
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ingredient Cards */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Ingredient Cards
        </h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Customize your order
              </h3>
              <p className="text-lg text-muted-foreground">
                Select ingredients to add or remove from your meal
              </p>

              {/* 3x4 Grid Layout */}
              <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {/* Free Ingredients */}
                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group bg-secondary/20">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Lettuce
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fresh & crispy
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Selected Free Ingredient */}
                <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-primary bg-primary/10 shadow-lg">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3 relative">
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-12 w-12 bg-primary/30 rounded-lg flex items-center justify-center">
                      <Cherry className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Tomato
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Vine ripened
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-primary/20 text-primary text-xs px-2 py-1 mt-1"
                      >
                        Selected
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group bg-secondary/20">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Onion
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Caramelized
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Selected Premium Ingredient */}
                <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-accent bg-accent/10 shadow-lg">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3 relative">
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div className="h-12 w-12 bg-accent/30 rounded-lg flex items-center justify-center">
                      <Beef className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Extra Bacon
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Crispy smoked
                      </p>
                      <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                        +£2.50
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <Milk className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Avocado
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fresh sliced
                      </p>
                      <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                        +£1.50
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <Package className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Extra Cheese
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Aged cheddar
                      </p>
                      <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                        +£1.00
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group bg-secondary/20">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Pickles
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Tangy dill
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Unavailable Ingredient */}
                <Card className="aspect-square cursor-not-allowed border-2 border-muted bg-muted/20 opacity-60">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-muted-foreground">
                        Mushrooms
                      </h4>
                      <p className="text-sm text-muted-foreground">Sautéed</p>
                      <Badge
                        variant="secondary"
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 mt-1"
                      >
                        Unavailable
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <Package className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Jalapeños
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Spicy kick
                      </p>
                      <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                        +£0.75
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group bg-secondary/20">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Cucumber
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fresh sliced
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                  <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <Beef className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        Grilled Chicken
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Herb seasoned
                      </p>
                      <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                        +£3.50
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Selected State Examples */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  Selected States
                </h3>
                <p className="text-lg text-muted-foreground">
                  Visual feedback when ingredients are selected
                </p>

                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {/* Selected Free Ingredient */}
                  <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-primary bg-primary/10 shadow-lg">
                    <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3 relative">
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="h-12 w-12 bg-primary/30 rounded-lg flex items-center justify-center">
                        <Cherry className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          Tomato
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Vine ripened
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs px-2 py-1 mt-1"
                        >
                          Selected
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Premium Ingredient */}
                  <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-accent bg-accent/10 shadow-lg">
                    <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3 relative">
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div className="h-12 w-12 bg-accent/30 rounded-lg flex items-center justify-center">
                        <Beef className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
                          Extra Bacon
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Crispy smoked
                        </p>
                        <Badge className="bg-accent text-accent-foreground text-sm px-2 py-1 mt-1">
                          +£2.50
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Disabled/Unavailable Ingredient */}
                  <Card className="aspect-square cursor-not-allowed border-2 border-muted bg-muted/20 opacity-60">
                    <CardContent className="p-4 h-full flex flex-col items-center justify-center text-center space-y-3">
                      <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-muted-foreground">
                          Spinach
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Fresh leaves
                        </p>
                        <Badge
                          variant="secondary"
                          className="bg-muted text-muted-foreground text-xs px-2 py-1 mt-1"
                        >
                          Unavailable
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Compact Version for Smaller Screens */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  Compact Version
                </h3>
                <p className="text-lg text-muted-foreground">
                  Smaller cards for mobile or limited space
                </p>

                <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
                  {/* Selected Free Ingredient */}
                  <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-primary bg-primary/10 shadow-lg">
                    <CardContent className="p-3 h-full flex flex-col items-center justify-center text-center space-y-2 relative">
                      <div className="absolute top-1 right-1">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="h-8 w-8 bg-primary/30 rounded-lg flex items-center justify-center">
                        <Cherry className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          Tomato
                        </h4>
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary text-xs px-1 py-0.5"
                        >
                          Selected
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Premium Ingredient */}
                  <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-accent bg-accent/10 shadow-lg">
                    <CardContent className="p-3 h-full flex flex-col items-center justify-center text-center space-y-2 relative">
                      <div className="absolute top-1 right-1">
                        <CheckCircle className="h-4 w-4 text-accent" />
                      </div>
                      <div className="h-8 w-8 bg-accent/30 rounded-lg flex items-center justify-center">
                        <Beef className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          Bacon
                        </h4>
                        <Badge className="bg-accent text-accent-foreground text-xs px-1 py-0.5">
                          +£2.50
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Regular Free Ingredient */}
                  <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group bg-secondary/20">
                    <CardContent className="p-3 h-full flex flex-col items-center justify-center text-center space-y-2">
                      <div className="h-8 w-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">
                          Lettuce
                        </h4>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Unavailable Ingredient */}
                  <Card className="aspect-square cursor-not-allowed border-2 border-muted bg-muted/20 opacity-60">
                    <CardContent className="p-3 h-full flex flex-col items-center justify-center text-center space-y-2">
                      <div className="h-8 w-8 bg-muted rounded-lg flex items-center justify-center">
                        <Milk className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-muted-foreground">
                          Avocado
                        </h4>
                        <Badge
                          variant="secondary"
                          className="bg-muted text-muted-foreground text-xs px-1 py-0.5"
                        >
                          Unavailable
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Checkout Summary */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Checkout Summary
        </h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Your Order</h3>
              <p className="text-lg text-muted-foreground">
                Review your items before checkout
              </p>

              {/* Order Items */}
              <div className="space-y-6 max-w-3xl mx-auto">
                {/* Item 1: Burger with customizations */}
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between space-x-4">
                      {/* Item Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-foreground">
                            Classic Burger
                          </h4>
                          <span className="text-xl font-bold text-foreground">
                            £12.99
                          </span>
                        </div>

                        {/* Customizations */}
                        <div className="space-y-2 pl-4 border-l-2 border-accent/30">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              + Extra Bacon
                            </span>
                            <span className="text-accent font-semibold">
                              +£2.50
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              + Avocado
                            </span>
                            <span className="text-accent font-semibold">
                              +£1.50
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              - No Pickles
                            </span>
                            <span className="text-muted-foreground">£0.00</span>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <span className="text-lg font-semibold text-foreground">
                            Item Total:
                          </span>
                          <span className="text-lg font-bold text-primary">
                            £16.99
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-12 w-12 rounded-lg border-2 bg-transparent"
                        >
                          <Minus className="h-6 w-6" />
                        </Button>
                        <span className="text-2xl font-bold text-foreground min-w-12 text-center">
                          2
                        </span>
                        <Button size="lg" className="h-12 w-12 rounded-lg">
                          <Plus className="h-6 w-6" />
                        </Button>
                      </div>

                      {/* Delete Button */}
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-12 w-12 rounded-lg border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      >
                        <Trash2 className="h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Item 2: Simple item without customizations */}
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between space-x-4">
                      {/* Item Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-foreground">
                            French Fries
                          </h4>
                          <span className="text-xl font-bold text-foreground">
                            £4.99
                          </span>
                        </div>

                        <div className="text-sm text-muted-foreground">
                          No customizations
                        </div>

                        {/* Item Total */}
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <span className="text-lg font-semibold text-foreground">
                            Item Total:
                          </span>
                          <span className="text-lg font-bold text-primary">
                            £4.99
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-12 w-12 rounded-lg border-2 bg-transparent"
                        >
                          <Minus className="h-6 w-6" />
                        </Button>
                        <span className="text-2xl font-bold text-foreground min-w-12 text-center">
                          1
                        </span>
                        <Button size="lg" className="h-12 w-12 rounded-lg">
                          <Plus className="h-6 w-6" />
                        </Button>
                      </div>

                      {/* Delete Button */}
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-12 w-12 rounded-lg border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      >
                        <Trash2 className="h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Item 3: Drink with customization */}
                <Card className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between space-x-4">
                      {/* Item Details */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-bold text-foreground">
                            Large Coke
                          </h4>
                          <span className="text-xl font-bold text-foreground">
                            £3.49
                          </span>
                        </div>

                        {/* Customizations */}
                        <div className="space-y-2 pl-4 border-l-2 border-accent/30">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Extra Ice
                            </span>
                            <span className="text-muted-foreground">£0.00</span>
                          </div>
                        </div>

                        {/* Item Total */}
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <span className="text-lg font-semibold text-foreground">
                            Item Total:
                          </span>
                          <span className="text-lg font-bold text-primary">
                            £3.49
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="lg"
                          className="h-12 w-12 rounded-lg border-2 bg-transparent"
                        >
                          <Minus className="h-6 w-6" />
                        </Button>
                        <span className="text-2xl font-bold text-foreground min-w-12 text-center">
                          1
                        </span>
                        <Button size="lg" className="h-12 w-12 rounded-lg">
                          <Plus className="h-6 w-6" />
                        </Button>
                      </div>

                      {/* Delete Button */}
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-12 w-12 rounded-lg border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      >
                        <Trash2 className="h-6 w-6" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <Card className="bg-secondary/50 border-2 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Order Summary
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-lg">
                      <span className="text-foreground">
                        Classic Burger × 2
                      </span>
                      <span className="text-foreground">£33.98</span>
                    </div>
                    <div className="flex items-center justify-between text-lg">
                      <span className="text-foreground">French Fries × 1</span>
                      <span className="text-foreground">£4.99</span>
                    </div>
                    <div className="flex items-center justify-between text-lg">
                      <span className="text-foreground">Large Coke × 1</span>
                      <span className="text-foreground">£3.49</span>
                    </div>

                    <div className="border-t-2 border-border pt-3">
                      <div className="flex items-center justify-between text-lg">
                        <span className="text-foreground">Subtotal</span>
                        <span className="text-foreground">£42.46</span>
                      </div>
                      <div className="flex items-center justify-between text-lg">
                        <span className="text-foreground">Tax (8.5%)</span>
                        <span className="text-foreground">£3.61</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-primary pt-3">
                      <div className="flex items-center justify-between text-2xl font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary">£46.07</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button className="w-full text-xl py-6 h-auto mt-6">
                    <CreditCard className="mr-3 h-6 w-6" />
                    Proceed to Checkout - £46.07
                  </Button>
                </CardContent>
              </Card>

              {/* Compact Mobile Version */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold text-foreground">
                  Compact Mobile Version
                </h3>
                <p className="text-lg text-muted-foreground">
                  Optimized layout for smaller screens
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                  {/* Compact Item */}
                  <Card className="border-2 border-border">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Item Header */}
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-bold text-foreground">
                            Classic Burger
                          </h4>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 rounded border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Customizations */}
                        <div className="text-sm text-muted-foreground">
                          + Extra Bacon (+£2.50), + Avocado (+£1.50), - No
                          Pickles
                        </div>

                        {/* Price and Quantity */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8 rounded bg-transparent"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-bold text-foreground min-w-8 text-center">
                              2
                            </span>
                            <Button size="sm" className="h-8 w-8 rounded">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <span className="text-lg font-bold text-primary">
                            £33.98
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Compact Summary */}
                  <Card className="bg-secondary/50 border-2 border-primary/20">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between text-lg">
                        <span className="text-foreground">Subtotal</span>
                        <span className="text-foreground">£42.46</span>
                      </div>
                      <div className="flex items-center justify-between text-lg">
                        <span className="text-foreground">Tax</span>
                        <span className="text-foreground">£3.61</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex items-center justify-between text-xl font-bold">
                          <span className="text-foreground">Total</span>
                          <span className="text-primary">£46.07</span>
                        </div>
                      </div>
                      <Button className="w-full text-lg py-4 h-auto mt-3">
                        Checkout - £46.07
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Prompt Modal */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Prompt Modal</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Confirmation Dialogs
              </h3>
              <p className="text-lg text-muted-foreground">
                Modal dialogs for critical user confirmations
              </p>

              {/* Modal Example 1: Cancel Order */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-foreground">
                  Cancel Order Confirmation
                </h4>

                {/* Modal Overlay and Content */}
                <div className="relative max-w-2xl mx-auto">
                  {/* Backdrop representation */}
                  <div className="bg-black/50 rounded-lg p-8">
                    <Card className="border-2 border-border shadow-2xl">
                      <CardContent className="p-8 relative">
                        {/* Close Button */}
                        <Button
                          variant="outline"
                          size="lg"
                          className="absolute top-4 right-4 h-12 w-12 rounded-lg border-2 bg-transparent"
                        >
                          <X className="h-6 w-6" />
                        </Button>

                        {/* Modal Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="flex justify-center">
                            <div className="h-20 w-20 bg-destructive/20 rounded-full flex items-center justify-center">
                              <AlertCircle className="h-12 w-12 text-destructive" />
                            </div>
                          </div>

                          {/* Title */}
                          <div className="text-center">
                            <h3 className="text-3xl font-bold text-foreground">
                              Cancel Order?
                            </h3>
                          </div>

                          {/* Message */}
                          <div className="text-center space-y-2">
                            <p className="text-xl text-foreground">
                              Are you sure you want to cancel your order?
                            </p>
                            <p className="text-lg text-muted-foreground">
                              All items will be removed and you'll need to start
                              over.
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                              variant="outline"
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto border-2 bg-transparent"
                            >
                              No, Keep Order
                            </Button>
                            <Button
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                            >
                              Yes, Cancel Order
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Modal Example 2: Delete Item */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground">
                  Delete Item Confirmation
                </h4>

                <div className="relative max-w-2xl mx-auto">
                  <div className="bg-black/50 rounded-lg p-8">
                    <Card className="border-2 border-border shadow-2xl">
                      <CardContent className="p-8 relative">
                        {/* Close Button */}
                        <Button
                          variant="outline"
                          size="lg"
                          className="absolute top-4 right-4 h-12 w-12 rounded-lg border-2 bg-transparent"
                        >
                          <X className="h-6 w-6" />
                        </Button>

                        {/* Modal Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="flex justify-center">
                            <div className="h-20 w-20 bg-accent/20 rounded-full flex items-center justify-center">
                              <Trash2 className="h-12 w-12 text-accent" />
                            </div>
                          </div>

                          {/* Title */}
                          <div className="text-center">
                            <h3 className="text-3xl font-bold text-foreground">
                              Remove Item?
                            </h3>
                          </div>

                          {/* Message */}
                          <div className="text-center space-y-2">
                            <p className="text-xl text-foreground">
                              Remove "Classic Burger" from your order?
                            </p>
                            <p className="text-lg text-muted-foreground">
                              This action cannot be undone.
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                              variant="outline"
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto border-2 bg-transparent"
                            >
                              No, Keep Item
                            </Button>
                            <Button
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                            >
                              Yes, Remove Item
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Modal Example 3: Payment Timeout */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground">
                  Session Timeout Warning
                </h4>

                <div className="relative max-w-2xl mx-auto">
                  <div className="bg-black/50 rounded-lg p-8">
                    <Card className="border-2 border-border shadow-2xl">
                      <CardContent className="p-8 relative">
                        {/* Modal Content */}
                        <div className="space-y-6">
                          {/* Icon */}
                          <div className="flex justify-center">
                            <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center">
                              <AlertCircle className="h-12 w-12 text-primary" />
                            </div>
                          </div>

                          {/* Title */}
                          <div className="text-center">
                            <h3 className="text-3xl font-bold text-foreground">
                              Session Expiring
                            </h3>
                          </div>

                          {/* Message */}
                          <div className="text-center space-y-2">
                            <p className="text-xl text-foreground">
                              Your session will expire in 60 seconds.
                            </p>
                            <p className="text-lg text-muted-foreground">
                              Would you like to continue with your order?
                            </p>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                              variant="outline"
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto border-2 bg-transparent"
                            >
                              End Session
                            </Button>
                            <Button
                              size="lg"
                              className="flex-1 text-xl py-6 h-auto"
                            >
                              Continue Order
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Compact Mobile Modals */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground">
                  Compact Mobile Version
                </h4>
                <p className="text-lg text-muted-foreground">
                  Optimized for smaller screens
                </p>

                <div className="relative max-w-md mx-auto">
                  <div className="bg-black/50 rounded-lg p-4">
                    <Card className="border-2 border-border shadow-2xl">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Icon */}
                          <div className="flex justify-center">
                            <div className="h-16 w-16 bg-destructive/20 rounded-full flex items-center justify-center">
                              <AlertCircle className="h-10 w-10 text-destructive" />
                            </div>
                          </div>

                          {/* Title and Message */}
                          <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold text-foreground">
                              Cancel Order?
                            </h3>
                            <p className="text-lg text-muted-foreground">
                              All items will be removed.
                            </p>
                          </div>

                          {/* Stacked Buttons for Mobile */}
                          <div className="space-y-3 pt-2">
                            <Button
                              variant="outline"
                              className="w-full text-lg py-4 h-auto border-2 bg-transparent"
                            >
                              No, Keep Order
                            </Button>
                            <Button className="w-full text-lg py-4 h-auto bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                              Yes, Cancel Order
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Modal Design Guidelines */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground">
                  Design Guidelines
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 space-y-3">
                      <h5 className="text-lg font-bold text-primary">
                        Visual Hierarchy
                      </h5>
                      <p className="text-foreground">
                        • Large, clear icons for immediate recognition
                      </p>
                      <p className="text-foreground">
                        • Bold titles with descriptive messages
                      </p>
                      <p className="text-foreground">
                        • Primary action uses accent/destructive colors
                      </p>
                      <p className="text-foreground">
                        • Secondary action uses outline styling
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/5 border-accent/20">
                    <CardContent className="p-6 space-y-3">
                      <h5 className="text-lg font-bold text-accent">
                        Touch Optimization
                      </h5>
                      <p className="text-foreground">
                        • Large buttons (minimum 60px height)
                      </p>
                      <p className="text-foreground">
                        • Generous spacing between actions
                      </p>
                      <p className="text-foreground">
                        • Clear close button in top-right
                      </p>
                      <p className="text-foreground">
                        • Backdrop prevents accidental taps
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Numeric Keypad */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Numeric Keypad</h2>
        <Card className="p-8">
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Number Input Interface
              </h3>
              <p className="text-lg text-muted-foreground">
                Touch-optimized keypad for numeric input with display area
              </p>

              {/* Full Keypad with Display */}
              <div className="space-y-6 max-w-md mx-auto">
                <h4 className="text-xl font-bold text-foreground text-center">
                  Complete Keypad
                </h4>

                {/* Display Area */}
                <Card className="bg-secondary/50 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <div className="text-4xl font-bold text-foreground font-mono min-h-12 flex items-center justify-end">
                        1234.56
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Enter amount
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Keypad Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Row 1: 7, 8, 9 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    7
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    8
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    9
                  </Button>

                  {/* Row 2: 4, 5, 6 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    4
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    5
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    6
                  </Button>

                  {/* Row 3: 1, 2, 3 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    1
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    2
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    3
                  </Button>

                  {/* Row 4: CE, 0, Delete */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-20 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    CE
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    0
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    <Delete className="h-8 w-8" />
                  </Button>
                </div>
              </div>

              {/* Alternative Layout: With Decimal Point */}
              <div className="space-y-6 max-w-md mx-auto pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground text-center">
                  With Decimal Point
                </h4>

                {/* Display Area */}
                <Card className="bg-secondary/50 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-right">
                      <div className="text-4xl font-bold text-foreground font-mono min-h-12 flex items-center justify-end">
                        £25.99
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Payment amount
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Keypad Grid with Decimal */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Row 1: 7, 8, 9 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    7
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    8
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    9
                  </Button>

                  {/* Row 2: 4, 5, 6 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    4
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    5
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    6
                  </Button>

                  {/* Row 3: 1, 2, 3 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    1
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    2
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    3
                  </Button>

                  {/* Row 4: ., 0, Delete */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20 border-2 bg-transparent"
                  >
                    .
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    0
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    <Delete className="h-8 w-8" />
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-xl py-4 h-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Clear All
                  </Button>
                  <Button size="lg" className="text-xl py-4 h-auto">
                    Confirm
                  </Button>
                </div>
              </div>

              {/* Compact Mobile Version */}
              <div className="space-y-6 max-w-xs mx-auto pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground text-center">
                  Compact Mobile
                </h4>

                {/* Compact Display */}
                <Card className="bg-secondary/50 border-2 border-primary/20">
                  <CardContent className="p-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground font-mono min-h-8 flex items-center justify-end">
                        123.45
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Compact Keypad */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Numbers 1-9 */}
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    1
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    2
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    3
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    4
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    5
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    6
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    7
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    8
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    9
                  </Button>

                  {/* Bottom row */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-lg font-bold w-full h-16 border-accent text-accent bg-transparent"
                  >
                    CE
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-16"
                  >
                    0
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square w-full h-16 border-destructive text-destructive bg-transparent"
                  >
                    <Delete className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* PIN Entry Version */}
              <div className="space-y-6 max-w-md mx-auto pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground text-center">
                  PIN Entry
                </h4>

                {/* PIN Display with Hidden Characters */}
                <Card className="bg-secondary/50 border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground font-mono min-h-12 flex items-center justify-center space-x-2">
                        <span className="h-4 w-4 bg-primary rounded-full"></span>
                        <span className="h-4 w-4 bg-primary rounded-full"></span>
                        <span className="h-4 w-4 bg-primary rounded-full"></span>
                        <span className="h-4 w-4 bg-muted rounded-full"></span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Enter 4-digit PIN
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* PIN Keypad */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Row 1: 1, 2, 3 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    1
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    2
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    3
                  </Button>

                  {/* Row 2: 4, 5, 6 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    4
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    5
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    6
                  </Button>

                  {/* Row 3: 7, 8, 9 */}
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    7
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    8
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    9
                  </Button>

                  {/* Row 4: Clear, 0, Delete */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-lg font-bold w-full h-20 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    Clear
                  </Button>
                  <Button
                    size="lg"
                    className="aspect-square text-3xl font-bold w-full h-20"
                  >
                    0
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="aspect-square text-xl font-bold w-full h-20 border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    <Delete className="h-8 w-8" />
                  </Button>
                </div>
              </div>

              {/* Design Guidelines */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h4 className="text-xl font-bold text-foreground">
                  Keypad Guidelines
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6 space-y-3">
                      <h5 className="text-lg font-bold text-primary">
                        Button Layout
                      </h5>
                      <p className="text-foreground">
                        • Standard phone keypad layout (1-2-3 at top)
                      </p>
                      <p className="text-foreground">
                        • Large 80px touch targets for accessibility
                      </p>
                      <p className="text-foreground">
                        • 16px gaps between buttons for precision
                      </p>
                      <p className="text-foreground">
                        • Square aspect ratio for consistent sizing
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/5 border-accent/20">
                    <CardContent className="p-6 space-y-3">
                      <h5 className="text-lg font-bold text-accent">
                        Function Buttons
                      </h5>
                      <p className="text-foreground">
                        • CE (Clear Entry) in accent color
                      </p>
                      <p className="text-foreground">
                        • Delete button in destructive color
                      </p>
                      <p className="text-foreground">
                        • Decimal point as outline button
                      </p>
                      <p className="text-foreground">
                        • Visual feedback on all interactions
                      </p>
                    </CardContent>
                  </Card>
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

      {/* Language Selection */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Language Selection
        </h2>
        <p className="text-muted-foreground text-lg max-w-4xl">
          Large, accessible language selection cards with flag representations
          for easy identification.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* English */}
          <Card className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 hover:border-primary h-48">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
              {/* UK Flag emoji */}
              <div className="text-6xl">🇬🇧</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">English</h3>
                <p className="text-muted-foreground">English</p>
              </div>
            </CardContent>
          </Card>

          {/* Polish */}
          <Card className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 hover:border-primary h-48">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
              {/* Polish Flag emoji */}
              <div className="text-6xl">🇵🇱</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Polski</h3>
                <p className="text-muted-foreground">Polish</p>
              </div>
            </CardContent>
          </Card>

          {/* Urdu (Pakistan) */}
          <Card className="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg border-2 hover:border-primary h-48">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
              {/* Pakistan Flag emoji */}
              <div className="text-6xl">🇵🇰</div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">اردو</h3>
                <p className="text-muted-foreground">Urdu</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected State Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Selected State</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="cursor-pointer border-2 border-primary bg-primary/10 h-48">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center space-y-4">
                {/* UK Flag emoji */}
                <div className="text-6xl">🇬🇧</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">English</h3>
                  <p className="text-primary/70">English</p>
                </div>
                {/* Selected indicator */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Design Guidelines */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Design Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Layout</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Large 192px height cards for easy touch</li>
                  <li>• 3-column grid on desktop, single column mobile</li>
                  <li>• Generous spacing between options</li>
                  <li>• Flag prominently displayed at top</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Interaction
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Hover scale effect for feedback</li>
                  <li>• Selected state with primary border and background</li>
                  <li>• Check mark indicator for selected language</li>
                  <li>• Native script display for language names</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Payment Processing Screen */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">
          Payment Processing
        </h2>
        <p className="text-muted-foreground text-lg max-w-4xl">
          Full-screen payment processing interface with clear status indication
          and amount confirmation.
        </p>

        {/* Processing State */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Processing Payment
          </h3>
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 min-h-[500px]">
            <CardContent className="p-12 h-full flex flex-col items-center justify-center text-center space-y-8">
              {/* Spinner */}
              <div className="relative">
                <div className="w-24 h-24 border-8 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                {/* Inner spinning element for more visual interest */}
                <div
                  className="absolute inset-4 w-16 h-16 border-4 border-primary/30 border-b-primary rounded-full animate-spin"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "0.8s",
                  }}
                ></div>
              </div>

              {/* Status Text */}
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-foreground">
                  Processing Payment
                </h3>
                <p className="text-xl text-muted-foreground max-w-md">
                  Please wait while we process your payment. Do not remove your
                  card or leave the kiosk.
                </p>
              </div>

              {/* Payment Amount */}
              <div className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 border-2 border-primary/20">
                <p className="text-lg text-muted-foreground mb-2">
                  Total Amount
                </p>
                <p className="text-5xl font-black text-primary">£24.99</p>
              </div>

              {/* Progress dots */}
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-primary/60 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success State */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Payment Successful
          </h3>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800 min-h-[500px]">
            <CardContent className="p-12 h-full flex flex-col items-center justify-center text-center space-y-8">
              {/* Success Icon */}
              <div className="w-24 h-24 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Success Text */}
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-green-700 dark:text-green-400">
                  Payment Successful!
                </h3>
                <p className="text-xl text-green-600 dark:text-green-300 max-w-md">
                  Your payment has been processed successfully. Your order is
                  being prepared.
                </p>
              </div>

              {/* Payment Amount */}
              <div className="bg-white/70 dark:bg-gray-900/50 rounded-2xl p-6 border-2 border-green-200 dark:border-green-800">
                <p className="text-lg text-green-600 dark:text-green-400 mb-2">
                  Amount Paid
                </p>
                <p className="text-5xl font-black text-green-700 dark:text-green-400">
                  £24.99
                </p>
              </div>

              {/* Order Number */}
              <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-600 dark:text-green-400 mb-1">
                  Order Number
                </p>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                  #12345
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error State */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Payment Failed</h3>
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800 min-h-[500px]">
            <CardContent className="p-12 h-full flex flex-col items-center justify-center text-center space-y-8">
              {/* Error Icon */}
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-red-600 dark:text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* Error Text */}
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-red-700 dark:text-red-400">
                  Payment Failed
                </h3>
                <p className="text-xl text-red-600 dark:text-red-300 max-w-md">
                  We couldn't process your payment. Please try again or use a
                  different payment method.
                </p>
              </div>

              {/* Payment Amount */}
              <div className="bg-white/70 dark:bg-gray-900/50 rounded-2xl p-6 border-2 border-red-200 dark:border-red-800">
                <p className="text-lg text-red-600 dark:text-red-400 mb-2">
                  Amount
                </p>
                <p className="text-5xl font-black text-red-700 dark:text-red-400">
                  £24.99
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <Button className="flex-1 h-16 text-lg" variant="default">
                  Try Again
                </Button>
                <Button className="flex-1 h-16 text-lg" variant="outline">
                  Choose Different Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Design Guidelines */}
        <Card className="bg-muted/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Design Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Processing State
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Large animated spinner for clear visual feedback</li>
                  <li>• Prominent amount display for confirmation</li>
                  <li>• Clear instructions to prevent interruption</li>
                  <li>• Gradient background to indicate active state</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Status States
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Green theme for successful payments</li>
                  <li>• Red theme for failed payments</li>
                  <li>• Order number display on success</li>
                  <li>• Action buttons for error recovery</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Category Cards */}
      <section className="space-y-6">
        <h2 className="text-4xl font-black text-foreground">Category Cards</h2>
        <p className="text-muted-foreground text-lg max-w-4xl">
          Browse our menu categories with visual images and clear category
          identification.
        </p>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Menu Categories
          </h3>
          <p className="text-lg text-muted-foreground">
            Select a category to explore our delicious offerings
          </p>

          {/* Main Category Grid - 4x2 Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Peri Platters */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Image Area */}
                <div className="flex-1 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-t-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 dark:group-hover:from-orange-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=300&fit=crop&crop=center"
                    alt="Peri Platters"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Category Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">
                    Peri Platters
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Flame-grilled perfection
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Offers */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-destructive group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-t-lg flex items-center justify-center group-hover:from-red-200 group-hover:to-pink-200 dark:group-hover:from-red-800/40 dark:group-hover:to-pink-800/40 transition-all duration-300 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=300&fit=crop&crop=center"
                    alt="Special Offers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                    Sale
                  </Badge>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">Offers</h4>
                  <p className="text-sm text-muted-foreground">
                    Special deals & savings
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Chicken Burgers */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-t-lg flex items-center justify-center group-hover:from-yellow-200 group-hover:to-orange-200 dark:group-hover:from-yellow-800/40 dark:group-hover:to-orange-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsphttps://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=croplash.com/photo-1553979459-d2229ba7433a?w=300&h=300&fit=crop&crop=center"
                    alt="Chicken Burgers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">
                    Chicken Burgers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Juicy & flavorful
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Beef Burgers */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/30 dark:to-red-900/30 rounded-t-lg flex items-center justify-center group-hover:from-amber-200 group-hover:to-red-200 dark:group-hover:from-amber-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&crop=center"
                    alt="Beef Burgers"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">
                    Beef Burgers
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Premium quality beef
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sides */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-t-lg flex items-center justify-center group-hover:from-yellow-200 group-hover:to-amber-200 dark:group-hover:from-yellow-800/40 dark:group-hover:to-amber-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop&crop=center"
                    alt="Sides"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">Sides</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect accompaniments
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Salads */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-t-lg flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 dark:group-hover:from-green-800/40 dark:group-hover:to-emerald-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop&crop=center"
                    alt="Salads"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">Salads</h4>
                  <p className="text-sm text-muted-foreground">
                    Fresh & healthy options
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Drinks */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-t-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-cyan-800/40 transition-all duration-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop&crop=center"
                    alt="Drinks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">Drinks</h4>
                  <p className="text-sm text-muted-foreground">
                    Refreshing beverages
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kids Meal */}
            <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-t-lg flex items-center justify-center group-hover:from-pink-200 group-hover:to-purple-200 dark:group-hover:from-pink-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop&crop=center"
                    alt="Kids Meal"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs">
                    Kids
                  </Badge>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-foreground">
                    Kids Meal
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fun meals for little ones
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected State Example */}
          <div className="space-y-4 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground">
              Selected State
            </h3>
            <p className="text-lg text-muted-foreground">
              Visual feedback when a category is selected
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Selected Category Example */}
              <Card className="aspect-square transition-all duration-300 cursor-pointer border-2 border-primary bg-primary/10 shadow-xl">
                <CardContent className="p-0 h-full flex flex-col relative">
                  {/* Selected indicator */}
                  <div className="absolute top-2 right-2 z-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-yellow-200 to-orange-200 dark:from-yellow-800/50 dark:to-orange-800/50 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=300&fit=crop&crop=center"
                      alt="Chicken Burgers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-primary">
                      Chicken Burgers
                    </h4>
                    <p className="text-sm text-primary/70">Juicy & flavorful</p>
                    <Badge className="bg-primary/20 text-primary text-xs px-2 py-1 mt-2">
                      Selected
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Other categories for context */}
              <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group opacity-60">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/30 dark:to-red-900/30 rounded-t-lg flex items-center justify-center group-hover:from-amber-200 group-hover:to-red-200 dark:group-hover:from-amber-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop&crop=center"
                      alt="Beef Burgers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-foreground">
                      Beef Burgers
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Premium quality beef
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary group opacity-60">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-t-lg flex items-center justify-center group-hover:from-yellow-200 group-hover:to-amber-200 dark:group-hover:from-yellow-800/40 dark:group-hover:to-amber-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=300&fit=crop&crop=center"
                      alt="Sides"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-foreground">Sides</h4>
                    <p className="text-sm text-muted-foreground">
                      Perfect accompaniments
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent group opacity-60">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-t-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-cyan-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop&crop=center"
                      alt="Drinks"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-foreground">
                      Drinks
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Refreshing beverages
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Compact Version */}
          <div className="space-y-4 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-foreground">
              Compact Version
            </h3>
            <p className="text-lg text-muted-foreground">
              Smaller cards for mobile or limited space scenarios
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-t-lg flex items-center justify-center group-hover:from-orange-200 group-hover:to-red-200 dark:group-hover:from-orange-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=200&h=200&fit=crop&crop=center"
                      alt="Peri Platters"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">
                      Peri Platters
                    </h4>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-destructive group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-t-lg flex items-center justify-center group-hover:from-red-200 group-hover:to-pink-200 dark:group-hover:from-red-800/40 dark:group-hover:to-pink-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&h=200&fit=crop&crop=center"
                      alt="Special Offers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">
                      Offers
                    </h4>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-t-lg flex items-center justify-center group-hover:from-yellow-200 group-hover:to-orange-200 dark:group-hover:from-yellow-800/40 dark:group-hover:to-orange-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=200&h=200&fit=crop&crop=center"
                      alt="Chicken Burgers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">
                      Chicken
                    </h4>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-amber-100 to-red-100 dark:from-amber-900/30 dark:to-red-900/30 rounded-t-lg flex items-center justify-center group-hover:from-amber-200 group-hover:to-red-200 dark:group-hover:from-amber-800/40 dark:group-hover:to-red-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&crop=center"
                      alt="Beef Burgers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">Beef</h4>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-t-lg flex items-center justify-center group-hover:from-yellow-200 group-hover:to-amber-200 dark:group-hover:from-yellow-800/40 dark:group-hover:to-amber-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=200&h=200&fit=crop&crop=center"
                      alt="Sides"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">Sides</h4>
                  </div>
                </CardContent>
              </Card>

              <Card className="aspect-square hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-accent group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-t-lg flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 dark:group-hover:from-green-800/40 dark:group-hover:to-emerald-800/40 transition-all duration-300 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop&crop=center"
                      alt="Salads"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="text-sm font-bold text-foreground">
                      Salads
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Design Guidelines */}
          <Card className="bg-muted/50 mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Design Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Layout</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Square aspect ratio for consistent grid layout</li>
                    <li>• 4x2 grid on desktop, 2x4 on mobile</li>
                    <li>• Large emoji icons for visual recognition</li>
                    <li>• Category name prominently displayed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Interaction
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Gradient backgrounds that change on hover</li>
                    <li>
                      • Selected state with border and background highlight
                    </li>
                    <li>• Special badges for offers and kids meals</li>
                    <li>• Touch-friendly sizing for kiosk interaction</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
